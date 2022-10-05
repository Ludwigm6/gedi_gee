# Description: Find GEdi Data for area and time range and write into file taht is readable form GEE
# Author: Alice Ziegler
# Date:
# 2022-09-08 15:54:02
# to do:

rm(list=ls())

########################################################################################
### Presettings
########################################################################################

#####
### load packages
#####
library(rGEDI)
library(readr)
library(rnaturalearth)
library(sf)
library(dplyr)

source("scripts/000_presettings.R") #as part of preprocessing script to adapt paths
#####
### general settings
#####


#####
### read data
#####

# for testing
# xmax <- 8.6
# xmin <- 8.460928
# ymax <- 50.85
# ymin <- 50.77558

# hessen:
hessen = rnaturalearth::ne_states(country = "Germany", returnclass = c("sf")) %>% dplyr::filter(name == "Hessen") %>% select(name)
hessen = st_cast(hessen, "POLYGON")
bbox <- st_bbox(hessen)

xmin <- bbox$xmin
xmax <- bbox$xmax
ymin <- bbox$ymin
ymax <- bbox$ymax

version <- "002"
daterange <- c("2019-03-01","2022-10-01")

orbs <- gedifinder(product="GEDI02_B", ymax, xmin, ymin, xmax, version, daterange)

asset_info_lst <- lapply(orbs, function(o){
  asset <- substr(o, 70, nchar(orbs)-3)
  # full_dt <- strsplit(as.character(asset), "_")[[1]][3]
  # yr <- substr(full_dt, 1, 4)
  # dy <- substr(full_dt, 5, 7)
  # dt <- as.Date(as.integer(dy)-1, origin = paste0(yr, "-01-01"))
  # sen1_strt <- dt-2
  # sen1_end <- dt+2
  # sen2_strt <- dt-5
  # sen2_end <- dt+5
  # df <- data.frame(asset = asset, sen1_strt = sen1_strt, sen1_end = sen1_end, sen2_strt = sen2_strt, sen2_end = sen2_end)
  # return(df)
})
saveRDS(asset_info_lst, file = paste0(gee_path, "asset_list.rds"))
asset_info <- do.call("rbind", asset_info_lst)


# to avoid appending to an existing file
if (file.exists(paste0(gee_path, "granule_list_comma.txt"))) {
    file.remove(paste0(gee_path, "granule_list_comma.txt"))}
if (file.exists(paste0(gee_path, "granule_list.txt"))) {
    file.remove(paste0(gee_path, "granule_list.txt"))}

# groups_list <- lapply(seq(ceiling(nrow(asset_info)/150)), function(j){
for(j in 1:ceiling(nrow(asset_info)/150)){
    from <- j*150 - 150
    if (j==1){
        from <- 1
    }
    to <-  j * 150
    if (to > nrow(asset_info)){
        to <- nrow(asset_info)
    }
    # print(from)
    # print(to)
#     return(data.frame(from = from, to = to))
#     
#     
# #}
# })
# groups <- do.call("rbind", groups_list)
cat(paste0("["), file = paste0(gee_path, "granule_list_comma.txt"), sep = "\n", append = TRUE)

 # for (i in nrow(asset_info)){
for (i in seq(from, to)){
  res_string = paste0("['LARSE/GEDI/GEDI02_B_002/",
                      asset_info[i],
                      "']")

  cat(paste0(res_string, ","), file = paste0(gee_path, "granule_list_comma.txt"), sep = "\n", append = TRUE)
}

cat(paste0("], "), file = paste0(gee_path, "granule_list_comma.txt"), sep = "\n", append = TRUE)
##remove comma at the end
read <- read_file(paste0(gee_path, "granule_list_comma.txt"))
no_comma <- substring(read,1, nchar(read)-3)
no_comma <- gsub("\r", "", no_comma)
cat(no_comma, file = paste0(gee_path, "granule_list_comma.txt"), sep = "")
}
###read delete last comma and write
##following runs, but adds one additional newline!! WHY??

read <- read_file(paste0(gee_path, "granule_list_comma.txt"))
no_comma <- substring(read,1, nchar(read)-3)
no_comma <- gsub("\r", "", no_comma)
cat(no_comma, file = paste0(gee_path, "granule_list.txt"), sep = "")
file.remove(paste0(gee_path, "granule_list_comma.txt"))

###next: manually import table into gee
