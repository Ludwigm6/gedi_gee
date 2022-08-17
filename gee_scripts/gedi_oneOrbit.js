

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
var hessen = ee.FeatureCollection("projects/ee-ludwigm6/assets/gedi_hessen/hessen");
var AOI = hessen.geometry().bounds();










// Load GEDI orbit
var gedi = ee.FeatureCollection('LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019111083958_O02011_02_T04619_02_003_01_V002');

// Filter a small amount of points in the orbit
gedi = gedi.filterBounds(hessen).randomColumn();
var gedi_sample = gedi.filter(ee.Filter.lt("random", 0.01));
print(gedi_sample);


// Load Sentinel 2 Surface Reflectance and apply the filtering
// TODO: dynamic time filter based on GEDI input



var sen2 = ee.ImageCollection('COPERNICUS/S2_SR')
    .filterBounds(gedi_sample)
    .filterDate('2019-11-05', '2019-11-15')
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 80)) // less than 80% cloud cover
    .select('B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'SCL')
    // .map(S2_SR_cloudmask) 
    .map(S2_SR_indices) // apply the function to each image in the ImageCollection (the different)
    .toBands() // Turn the collection into one multi-band image

// Hint: I left out the cloud mask for this test since the chosen date is very cloudy and no points are left



// extract the gedi points
var sampledPoints = sen2.sampleRegions({
  collection: gedi_sample,
  scale: 10,
  properties: ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'NDVI','EVI','IRECI','SCL','pai'],
  geometries: true
})


Map.addLayer(sen2, {}, "Sentinel2")
Map.addLayer(gedi_sample, {color: "red"}, "GEDI")
Map.addLayer(sampledPoints, {color: "green"}, "GEDI Sample")

// export
print(sampledPoints)
//Export.table.toDrive(sampledPoints)


// print (GEDI);







/*


Map.addLayer (GEDI, {
    bands: ['rh100'],
    palette: ['black']}, 
    'GEDI', true);

Map.addLayer (GEDI, {
    min:0,
    max:100,
    bands: ['delta_time'],
    palette: ['red', 'yellow', 'blue']}, 
    'GEDI delta time', true);

Map.addLayer (GEDI, {
    min:0,
    max:20,
    bands: ['rh98'],
    palette: ['black', 'yellow', 'green']}, 
    'GEDI canopy', true);
    
*/




