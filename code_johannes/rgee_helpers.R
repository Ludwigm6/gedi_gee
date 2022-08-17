gedi_finder <- function(product, bbox) {
  
  # Define the base CMR granule search url, including LPDAAC provider name and max page size (2000 is the max allowed)
  cmr <- "https://cmr.earthdata.nasa.gov/search/granules.json?pretty=true&provider=LPDAAC_ECS&page_size=2000&concept_id="
  
  # Set up dictionary where key is GEDI shortname + version and value is CMR Concept ID
  concept_ids <- list('GEDI01_B.002'='C1908344278-LPDAAC_ECS', 
                      'GEDI02_A.002'='C1908348134-LPDAAC_ECS', 
                      'GEDI02_B.002'='C1908350066-LPDAAC_ECS')
  
  # CMR uses pagination for queries with more features returned than the page size
  page <- 1
  bbox <- sub(' ', '', bbox)  # Remove any white spaces
  granules <- list()          # Set up a list to store and append granule links to
  
  # Send GET request to CMR granule search endpoint w/ product concept ID, bbox & page number
  cmr_response <- httr::GET(sprintf("%s%s&bounding_box=%s&pageNum=%s", cmr, concept_ids[[product]],bbox,page))
  
  # Verify the request submission was successful
  if (cmr_response$status_code==200){
    
    # Send GET request to CMR granule search endpoint w/ product concept ID, bbox & page number, format return as a list
    cmr_response <- httr::content(httr::GET(sprintf("%s%s&bounding_box=%s&pageNum=%s", cmr, concept_ids[[product]],bbox,page)))$feed$entry
    
    # If 2000 features are returned, move to the next page and submit another request, and append to the response
    while(length(cmr_response) %% 2000 == 0){
      page <- page + 1
      cmr_response <- c(cmr_response, httr::content(httr::GET(sprintf("%s%s&bounding_box=%s&pageNum=%s", cmr, concept_ids[[product]],bbox,page)))$feed$entry)
    }
    
    # CMR returns more info than just the Data Pool links, below use for loop to go through each feature, grab DP link, and add to list
    for (i in 1:length(cmr_response)) {
      granules[[i]] <- cmr_response[[i]]$links[[1]]$href
    }
    
    # Return the list of links
    return(granules)
  } else {
    
    # If the request did not complete successfully, print out the response from CMR
    print(content(GET(sprintf("%s%s&bounding_box=%s&pageNum=%s", cmr, concept_ids[[product]],bbox,page)))$errors)
  }
}

get_coords = function(geo){
  x = substr(geo, 38,74)
  x = gsub("]","",x)
  x = gsub("}","",x)
  x = tidyr::separate(as.data.frame(x), col=1, sep=",", into = c("lon","lat")) 
  x$lon = as.numeric(x$lon)
  x$lat = as.numeric(x$lat)
}

getDateTime = function(x){
  t = substr(sub("GEDI02_[AB]_","",x),1,13)
  strptime(t,"%Y%j%H%M%S")
}

ee_size = function(x){
  s = x$size()$getInfo()
  message(paste("Size:",s))
}

ee_showProps = function(x){
  n = x$first()$getInfo() |> unlist() |> data.frame() |> row.names()
  sub("properties.","",n)
}

ee_showPropsFeat = function(x){
  n = x$getInfo() |> unlist() |> data.frame() |> row.names()
  sub("properties.","",n)
}

ee_first = function(x){
  print(x$first()$getInfo() |> unlist() |> data.frame() |> setNames("Value"))
}

ee_normalize = function(image){
  bandNames = image$bandNames()
  minDict = image$reduceRegion(reducer = ee$Reducer$min(), scale = 10,
                               maxPixels = 1e9, bestEffort = T,tileScale = 16) 
  maxDict = image$reduceRegion(reducer = ee$Reducer$max(), scale = 10, 
                               maxPixels = 1e9, bestEffort = T, tileScale = 16)
  mins = ee$Image$constant(minDict$values(bandNames))
  maxs = ee$Image$constant(maxDict$values(bandNames))
  
  normalized = image$subtract(mins)$divide(maxs$subtract(mins))$multiply(10000)$toInt()
  return(normalized)
}

ee_trainRF = function(trainingSamples, nTrees = 500, target = "label") {
  rf = ee$Classifier$smileRandomForest(nTrees)$
    train(features = trainingSamples,
          classProperty = target,
          inputProperties = s2a_red_rep$bandNames())
}

ee_varImp = function(model, chart=T, text=F, top = 10, oobee = F){
  # Get information about the trained classifier.
  ex = model$explain()$getInfo()
  imp = ex$importance |> unlist() 
  imp = scale(imp, center = min(imp), scale = F)[,1] |> sort(decreasing = T) 
  imp = data.frame(var = names(imp), imp = imp)
  imp$var = factor(imp$var, levels = imp$var[order(imp$imp)])
  rownames(imp) = NULL
  if (chart) plot(ggplot2::ggplot(imp[1:top,], ggplot2::aes(y=var,x=imp)) + ggplot2::geom_bar(stat = "identity"))
  if (text) print(imp[1:top,])
  if (oobee) message(paste("outOfBagErrorEstimate =", t.explained[4] |> as.numeric() |> round(3)))
}

ee_trainConfusion = function(model, class_nms = c("Eiche","Buche","Fichte","Kiefer")){
  ta = model$confusionMatrix()
  tam <- ta$getInfo()
  em = tam |> unlist() |> matrix(nrow = length(tam), byrow=TRUE) 
  rs = rowSums(em)
  cs = colSums(em)
  nvar = nrow(em) 
  if (!length(class_nms) == nvar){stop(); message("Number of classes and names are not matching")}
  uacc = pacc = c(rep(0,nvar))
  for (i in 1:nvar) uacc[i] = em[i,i] / rs[i]
  for (i in 1:nvar) pacc[i] = em[i,i] / cs[i]
  pacc = c(pacc, 0)
  em = cbind(em,round(uacc,3)) |> rbind(round(pacc,3))
  colnames(em) = c(class_nms, "UserAcc")
  rownames(em) = c(class_nms, "ProdAcc")
  
  oa = ta$accuracy()$getInfo()
  ka = ta$kappa()$getInfo()
  message('Training Confusion Matrix: ')
  print(em)
  message(paste('Overall Accurracy:', round(oa, 3)))
  message(paste('Kappa:', round(ka, 3)))
}

ee_testConfusion = function(val, target = "label", eval_table = eval_table, fold = f, class_nms = c("Eiche","Buche","Fichte","Kiefer")){
  ta = val$errorMatrix(target, 'classification')
  tam <- ta$getInfo()
  em = tam |> unlist() |> matrix(nrow = length(tam), byrow=TRUE) 
  rs = rowSums(em)
  cs = colSums(em)
  nvar = nrow(em) 
  if (!length(class_nms) == nvar){stop(); message("Number of classes and names are not matching")}
  uacc = pacc = c(rep(0,nvar))
  for (i in 1:nvar) uacc[i] = em[i,i] / rs[i]
  for (i in 1:nvar) pacc[i] = em[i,i] / cs[i]
  pacc = c(pacc, 0)
  em = cbind(em,round(uacc,3)) |> rbind(round(pacc,3))
  colnames(em) = c(class_nms, "UserAcc")
  rownames(em) = c(class_nms, "ProdAcc")
  oa = ta$accuracy()$getInfo()
  ka = ta$kappa()$getInfo()
  if(! missing(eval_table)) eval_table[f,] <<- c(oa,ka)
  message('Training Confusion Matrix: ')
  print(em)
  message(paste('Overall Accurracy:', round(oa, 3)))
  message(paste('Kappa:', round(ka, 3)))
}


TreeHeightVis <- paste0(
  "<RasterSymbolizer>",
  '<ColorMap  type="intervals" extended="false" >',
  '<ColorMapEntry color="#F2F2F2" quantity="0" label="0"/>',
  '<ColorMapEntry color="#EFC2B3" quantity="5" label="1-100" />',
  '<ColorMapEntry color="#ECB176" quantity="10" label="110-200" />',
  '<ColorMapEntry color="#E9BD3A" quantity="15" label="210-300" />',
  '<ColorMapEntry color="#E6E600" quantity="20" label="310-400" />',
  '<ColorMapEntry color="#8BD000" quantity="25" label="410-1000" />',
  '<ColorMapEntry color="#3EBB00" quantity="30" label="410-1000" />',
  '<ColorMapEntry color="#00A600" quantity="35" label="410-1000" />',
  "</ColorMap>",
  "</RasterSymbolizer>"
)


p = rev(terrain.colors(31))
x = paste0('<ColorMapEntry color=\"',p[1:31],'" quantity="',5:35,'" label="0"/>') 
FineTreeHeightVis = paste0("<RasterSymbolizer>",
  '<ColorMap  type="intervals" extended="false" >', paste0(x, collapse = ""),
  "</ColorMap>","</RasterSymbolizer>")

heatColors <- paste0(
  "<RasterSymbolizer>",
  '<ColorMap type="ramp" extended="false" >',
  '<ColorMapEntry color="#FFFF80" quantity="0" label="0"/>',
  '<ColorMapEntry color="#FFFF00" quantity="0.2" label="100" />',
  '<ColorMapEntry color="#FFBF00" quantity="0.4" label="200" />',
  '<ColorMapEntry color="#FF8000" quantity="0.6" label="300" />',
  '<ColorMapEntry color="#FF4000" quantity="0.8" label="400" />',
  '<ColorMapEntry color="#FF0000" quantity="1" label="500" />',
  "</ColorMap>",
  "</RasterSymbolizer>"
)
rm(p,x)
