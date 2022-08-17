source("code_johannes/rgee_helpers.R")


library(sf)
library(rnaturalearth)
library(dplyr)

# get hessen
hessen = rnaturalearth::ne_states(country = "Germany", returnclass = "sf") %>% filter(name == "Hessen") %>% select(name)
hessen = st_cast(hessen, "POLYGON")
hessen
st_write(hessen, "data/hessen.shp")


bbox <- '7.7,49.3,10.23,51.6'

gr2A <- gedi_finder('GEDI02_A.002', bbox) |> unlist() |> basename() 
gr2B <- gedi_finder('GEDI02_B.002', bbox) |> unlist() |> basename()

gr2A = tibble(L2A = gr2A) |> mutate(id = substr(L2A,10, 39))
gr2B = tibble(L2B = gr2B) |> mutate(id = substr(L2B,10, 39))

granules = inner_join(gr2A, gr2B, by = "id")


# filter dates

granules = granules |> 
    mutate(date = getDateTime(L2A),
           year = lubridate::year(date),
           month = lubridate::month(date),
           hour = lubridate::hour(date),
           date = lubridate::as_date(date),
           assetPathL2A = sub('.h5', '', paste0('LARSE/GEDI/GEDI02_A_002/',L2A)),
           assetPathL2B = sub('.h5', '', paste0('LARSE/GEDI/GEDI02_B_002/',L2B))) |> 
    select(-c(1,3)) |> 
    mutate(startDate = date - 5,
           endDate = date + 5)


set.seed(5)
granule_sample = granules[sample(1500,5),]


for(i in 1:nrow(granule_sample)){
    
    
    res_string = paste0("['",
                        granule_sample$assetPathL2B[i], "' , '",
                        granule_sample$startDate[i], "' , '",
                        granule_sample$endDate[i],
                        "']")

    cat(res_string, file = "granule_list.txt", append = TRUE)
    cat(",\n", file = "granule_list.txt", append = TRUE)
}





