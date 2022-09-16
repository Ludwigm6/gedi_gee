// INPUT -------------------------------


// input granules
// granule format: ["Name", "Date"]

var granule_list = [
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2020330171806_O11074_02_T08735_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2020230081607_O09518_02_T01237_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019248025112_O04134_02_T00641_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2020243055419_O09718_03_T07757_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2021003022816_O11669_02_T07098_02_003_01_V002']
               ]


//var granule_list = require("users/alicezglr/default/granule_list.js");
//var granules = granule_list.granules
// load hessen vector: AOI
var hessen = ee.FeatureCollection("projects/ee-ludwigm6/assets/gedi_hessen/hessen");

// FUNCTIONS ---------------------------

// define function for indices
var S2_SR_indices = function(img){

  var ndvi = img.expression('(NIR-RED)/(NIR+RED)', {
              'NIR': img.select('B8'),
              'RED': img.select('B4')
              }).multiply(10000).toInt16().rename('NDVI');

  var evi = img.expression(
      '2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))', {
      'NIR': img.select('B8'),
      'RED': img.select('B4'),
      'BLUE': img.select('B2')}).multiply(10000).toInt16().rename('EVI');

  var ireci = img.expression(
      '(NIR - RED)/(RE1/RE2)',{
        'NIR': img.select('B7'),
        'RED': img.select('B4'),
        'RE1': img.select('B5'),
        'RE2': img.select('B6')}).multiply(10000).toInt16().rename('IRECI');


    return img.addBands(ndvi).addBands(evi).addBands(ireci);
}

// define function for Sentinel 1
var sen1vvvh = function(image){

  var diff = image.select("VV").subtract(image.select("VH")).rename("VVsubVH")
  var rati = image.select("VV").divide(image.select("VH")).rename("VVdivVH")

  return image.addBands(diff).addBands(rati)

}

//define function to extract date of gedi orbit by name of gedi orbit
function name2date(namestring){
  var fulldt = namestring.split("_")[4].substr(0,7);
  var year = parseInt(fulldt.substr(0,4));
  var day = parseInt(fulldt.substr(4,7));
  var date = new Date(year, 0, day+1); //!!! az: I added the +1. JS community does without. But incorrect, right!?!?
  return(ee.Date(date))
}



// COMPUTE --------------------------


// map over granule list
var results = granules.map(function(g){


  // Load one GEDI orbit
  var gedi = ee.FeatureCollection(g[0]);
  //var gedi_date = ee.Date(g[1])
  var gedi_date = name2date(g[0])


  gedi = gedi.filterBounds(hessen)
  .filter(ee.Filter.eq("l2b_quality_flag", 1))
  .filter(ee.Filter.gt("sensitivity", 0.9))
  .filter(ee.Filter.neq("pai", null));
  /*
  // Filter a small amount of points in the orbit
  gedi = gedi.filterBounds(hessen).randomColumn();
  var gedi_sample = gedi.filter(ee.Filter.lt("random", 0.03));
  */
    print("gedi filter size: ", gedi.size())
   // print(gedi)
  //while testing:
  var gedi_sample = gedi
  // Buffer the points and add time as property
<<<<<<< HEAD
  gedi_sample = gedi_sample.map(function(f){return f.buffer(12.5).set({time: gedi_date})})
=======
  gedi_sample = gedi_sample.map(function(f){return f.buffer(12.5).set({time: g[1]})})
  //print(gedi_sample)
>>>>>>> 2ef733a (minor changes for export into the R workflow)


print("gedi buffer size: ", gedi_sample.size())
print(gedi_sample, "W Time")
    // calc time difference to gedi date
  var temporalMatch = function(image){
      var timediff = gedi_date.difference(ee.Date(image.get("system:time_start")), "day").abs()
      return image.set({timediff: timediff})
    };


  // Load Sentinel 2 Surface Reflectance and apply the filtering
  // Uses start and end date specified in the granule list
  var sen2 = ee.ImageCollection('COPERNICUS/S2_SR')
    .filterBounds(gedi_sample)
    .filterDate(gedi_date.advance(-5, "day"), gedi_date.advance(5, "day")) // +- 5 days of gedi orbit
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 80)) // less than 80% cloud cover
    .select('B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'SCL')
    .map(function(image){
      var idate = ee.Number.parse(image.date().format("YYYYDDD"))
      var dateBand = ee.Image.constant(idate).uint32().rename('S2time')
      return(image.addBands(dateBand))
    })
    .map(S2_SR_indices)
    .map(temporalMatch)
    .sort("timediff")
    .mosaic()


  var sen1 = ee.ImageCollection("COPERNICUS/S1_GRD")
  .filterBounds(gedi_sample)
  .filterDate(gedi_date.advance(-3, "day"), gedi_date.advance(3, "day")) // +- 3 days of gedi orbit
  .filter(ee.Filter.listContains('transmitterReceiverPolarisation', "VV"))
  .filter(ee.Filter.listContains('transmitterReceiverPolarisation', "VH"))
  .filter(ee.Filter.eq('instrumentMode', 'IW'))
  .select("VV", "VH")
  .map(function(image){
      var idate = ee.Number.parse(image.date().format("YYYYDDD"));
      var dateBand = ee.Image.constant(idate).uint32().rename('S1time')
      return(image.addBands(dateBand))
    })
  .map(sen1vvvh)
  .map(temporalMatch)
  .sort("timediff")
  .mosaic();

  var stack = sen2.addBands(sen1)

  var sampledPoints = stack.sampleRegions({
  collection: gedi_sample,
  scale: 10,
  properties: ['time','pai', "beam", "degrade_flag", "l2b_quality_flag",
  "orbit_number", "sensitivity", "shot_number", "shot_number_within_beam",
  "solar_azimuth", "solar_elevation", "id"],
  geometries: true
})

  print("sampled_Poimts: ", sampledPoints.size())
  return sampledPoints

})

print(results, "Sampled Points")



var resultsCollection = ee.FeatureCollection(results).flatten()

print(resultsCollection.first(), "RES")


print("size result collection: ", resultsCollection.size())
// save each GEDI orbit in a different file



Export.table.toDrive({
    collection: resultsCollection,
    description: "Res",
    fileNamePrefix: "gedi_",
    folder: "gedi"
  })
