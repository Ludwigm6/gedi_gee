library(rGEDI)

# test
# ymax <- 50.85
# ymin <- 50.77558
# xmax <- 8.6
# xmin <- 8.460928

# hessen:
xmin = 49.39628944814831
xmax = 51.65501140779892
ymin = 7.771392645380973
ymax = 10.232896742972384

version <- "002"
daterange <- c("2019-03-01","2022-12-31")

orbs <- gedifinder(product="GEDI02_B", ymax, xmin, ymin, xmax, version, daterange)

#
# assets <- substr(orbs, 70, nchar(orbs)-3)
# full_dt <- strsplit(as.character(assets), "_")[[1]][3]
# yr <- substr(full_dt, 1, 4)
# dy <- substr(full_dt, 5, 7)
# dt <- as.Date(as.integer(dy)-1, origin = paste0(yr, "-01-01"))
# sen1_strt <- dt-2
# sen1_end <- dt+2
# sen2_strt <- dt-5
# sen2_end <- dt+5
# #df <- data.frame(assets = assets, sen1_str = sen1_str, sen1_end = sen1_end, sen2_srt = sen2_srt, sen2_end = sen2_end)


asset_info_lst <- lapply(orbs, function(o){
  asset <- substr(o, 70, nchar(orbs)-3)
  full_dt <- strsplit(as.character(asset), "_")[[1]][3]
  yr <- substr(full_dt, 1, 4)
  dy <- substr(full_dt, 5, 7)
  dt <- as.Date(as.integer(dy)-1, origin = paste0(yr, "-01-01"))
  sen1_strt <- dt-2
  sen1_end <- dt+2
  sen2_strt <- dt-5
  sen2_end <- dt+5
  df <- data.frame(asset = asset, sen1_strt = sen1_strt, sen1_end = sen1_end, sen2_strt = sen2_strt, sen2_end = sen2_end)
  return(df)
})
asset_info <- do.call(rbind, asset_info_lst)

# to avoid appending to an existing file
if (file.exists("data/granule_list.txt")) {
    file.remove("data/granule_list.txt")}

for(i in 1:nrow(asset_info)){
  res_string = paste0("['LARSE/GEDI/GEDI02_B_002/",
                      asset_info[i,"asset"], "' , '",
                      asset_info[i,"sen1_strt"], "' , '",
                      asset_info[i,"sen1_end"], "' , '",
                      asset_info[i,"sen2_strt"], "' , '",
                      asset_info[i,"sen2_end"],
                      "']")

  cat(res_string, file = "data/granule_list.txt", append = TRUE)
  cat(",/n", file = "data/granule_list.txt", append = TRUE)
}
