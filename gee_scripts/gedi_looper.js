

// input granules // client side list
// granule format: ["Name", "StartDate", "EndDate"]

var granules = [
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2020330171806_O11074_02_T08735_02_003_01_V002' , '2020-11-20' , '2020-11-30'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2020230081607_O09518_02_T01237_02_003_01_V002' , '2020-08-12' , '2020-08-22'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019248025112_O04134_02_T00641_02_003_01_V002' , '2019-08-31' , '2019-09-10'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2020243055419_O09718_03_T07757_02_003_01_V002' , '2020-08-25' , '2020-09-04'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2021003022816_O11669_02_T07098_02_003_01_V002' , '2020-12-29' , '2021-01-08']
               ]


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


// define function for cloud mask (based on SCL band)

var S2_SR_cloudmask = function (image) {
  var scl = image.select('SCL');
  var wantedPixels = scl.gt(3).and(scl.lt(7)).or(scl.eq(1)).or(scl.eq(2));
  return image.updateMask(wantedPixels)
}



// load hessen vector
var hessen = ee.FeatureCollection("users/alicezglr/hessen");
//var hessen = ee.FeatureCollection("projects/ee-ludwigm6/assets/gedi_hessen/hessen");
var AOI = hessen.geometry().bounds();



// map over granule list
var results = granules.map(function(g){

  // Load one GEDI orbit
  var gedi = ee.FeatureCollection(g[0]);



  /*
  // Filter a small amount of points in the orbit
  gedi = gedi.filterBounds(hessen).randomColumn();
  var gedi_sample = gedi.filter(ee.Filter.lt("random", 0.03));
    // Buffer the points
  gedi_sample = gedi_sample.map(function(f){return f.buffer(15)});
  */

  // Filter gedi points
  var gedi_filt = gedi
  .filter(ee.Filter.eq("l2b_quality_flag", 1)) // decide on values
  .filter(ee.Filter.gt("sensitivity", 0.96)) // decide on values
  .filter(ee.Filter.inList("beam", ee.List([5,6,8,11]))) // decide
  .filter(ee.Filter.neq("pai", null)); //not sure if not working or no null values
// print("gedi_filt: ", gedi_filt);
// print("Number of shots after filtering: ", gedi_filt.size());

  //while testing:
  var gedi_sample = gedi_filt;


  // Load Sentinel 2 Surface Reflectance and apply the filtering
  // Uses start and end date specified in the granule list
  var sen2 = ee.ImageCollection('COPERNICUS/S2_SR')
    .filterBounds(gedi_sample)
    .filterDate(g[1], g[2])
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 80)) // less than 80% cloud cover
    .select('B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'SCL')
    // .map(S2_SR_cloudmask)
    .map(S2_SR_indices) // apply the index calculation function to each image in the ImageCollection
    .toBands() // Turn the collection into one multi-band image







  var sampledPoints = sen2.sampleRegions({
  collection: gedi_sample,
  scale: 10,
  properties: ['pai'],
  geometries: true
})



return(sampledPoints)



})


// look at output
print(results)



// save each GEDI orbit in a different file
for(var j in [0,1,2,3,4]){
  Export.table.toDrive({
    collection: results[j],
    description: j,
    fileNamePrefix: "gedi_"+j,
    folder: "gedi"
  })
}


// Hint: I left out the cloud mask for this test since the chosen date is very cloudy and no points are left
