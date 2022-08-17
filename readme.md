# Google Earth Engine: get GEDI


## Usage

### Preparation

The R script `gedi_granules.R` creates a "list" of GEDI orbits with 3 entries: orbit filename, start date and end date.
The start and end dates are used to reduce the Sentinel Imagery to the orbit time of GEDI +- 5 days.

The script creates the output `granule_list.txt`. Copy the content of this file to the top of `gedi_looper.js`.


### GEE

`gedi_looper.js` loads the specified orbit FeatureCollections and extracts Sentinel 2 information (currently at the point level).
It produces one export task per orbit, hence one output file per orbit.

Depending on the number of available S2 Scenes in the orbits time frame, there are different amounts of columns in the output file (see `example_output`).
Sometimes the PAI is missing in the GEDI data. 

## To Do

[ ] Implement point buffer. If we have multiple pixel per polygon, we should be able to identify this via the system:index of GEE.
[ ] Use prefiltered orbits from Alice.
[ ] Implement Sentinel 1





















