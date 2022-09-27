# Description: take sample of gedi granules for creating dataset for developing
# Author: Alice Ziegler
# Date:
# 2022-09-27 16:41:55
# to do:

rm(list=ls())

########################################################################################
### Presettings
########################################################################################

#####
### load packages & stuff
#####
library(plyr)
source("scripts/000_presettings.R") #as part of preprocessing script to adapt paths

#####
### general settings
#####

#####
### read data
#####
granule_lst <- readRDS(file = paste0(gee_path, "asset_list.rds"))


########################################################################################
### Do stuff
########################################################################################



#####
### get date and year from granule
#####
granule_info_lst <- lapply(granule_lst, function(o){
  full_dt <- strsplit(as.character(o), "_")[[1]][3]
  yr <- substr(full_dt, 1, 4)
  dy <- substr(full_dt, 5, 7)
  dt <- as.Date(as.integer(dy)-1, origin = paste0(yr, "-01-01"))
  df <- data.frame(granule = o, date = dt, year = yr)
  return(df)
})
granule_info <- do.call("rbind", granule_info_lst)

#####
### get rid of 2022 obs (27.9.2022: latest obs in april)
#####
granule_info <- granule_info[!granule_info$year == 2022,]

#####
### sample n rows for each year
#####

granule_sample <- ddply(granule_info,.(year),function(x) x[sample(nrow(x),50),])


#####
### write out
#####

# to avoid appending to an existing file
if (file.exists(paste0(gee_path, "granule_list_sample_comma.txt"))) {
  file.remove(paste0(gee_path, "granule_list_sample_comma.txt"))}
if (file.exists(paste0(gee_path, "granule_list_sample.txt"))) {
  file.remove(paste0(gee_path, "granule_list_sample.txt"))}

for(i in granule_sample$granule){
  res_string = paste0("['LARSE/GEDI/GEDI02_B_002/",
                      i, "']")

  cat(paste0(res_string, ","), file = paste0(gee_path, "granule_list_sample_comma.txt"), sep = "\n", append = TRUE)
}

###read delete last comma and write
##following runs, but adds one additional newline!! WHY??

read <- read_file(paste0(gee_path, "granule_list_sample_comma.txt"))
no_comma <- substring(read,1, nchar(read)-3)
no_comma <- gsub("\r", "", no_comma)
cat(no_comma, file = paste0(gee_path, "granule_list_sample.txt"), sep = "")
file.remove(paste0(gee_path, "granule_list_sample_comma.txt"))
