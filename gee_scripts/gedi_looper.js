// INPUT -------------------------------


// input granules
// granule format: ["Name", "Date"]


//var gedi_granules = require("users/Ludwigm6/gedi:gedi_granules")
/*
var gedi_granules = require("users/alicezglr/default:granule_list")
var granules = gedi_granules.granules
*/

var granules = [
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019108093620_O01965_02_T05338_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019108110901_O01966_03_T02493_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019110092939_O01996_02_T03334_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019110110221_O01997_03_T03335_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019111083958_O02011_02_T04619_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019111101240_O02012_03_T01774_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019112075017_O02026_02_T00059_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019113100559_O02043_03_T04039_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019114074336_O02057_02_T02477_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019114091617_O02058_03_T02478_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019115065354_O02072_02_T00763_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019115082635_O02073_03_T05033_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019116060412_O02087_02_T03318_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019116090935_O02089_03_T00474_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019117064711_O02103_02_T01758_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019117081953_O02104_03_T01759_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019118055729_O02118_02_T00044_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019118073011_O02119_03_T04314_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019119050747_O02133_02_T04022_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019120072327_O02150_03_T02463_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019121050103_O02164_02_T00748_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019121063344_O02165_03_T00749_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019122041120_O02179_02_T02033_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019122054401_O02180_03_T03304_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019123032136_O02194_02_T04588_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019124040434_O02210_02_T00029_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019124053715_O02211_03_T00030_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019125031450_O02225_02_T02737_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019125044731_O02226_03_T02738_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019127044044_O02257_03_T03580_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019128021818_O02271_02_T02018_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019128035059_O02272_03_T02019_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019129012833_O02286_02_T04573_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019129030113_O02287_03_T00305_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019130003848_O02301_02_T01589_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019131012144_O02317_02_T05568_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019131025425_O02318_03_T05569_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019132003158_O02332_02_T03854_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019132020439_O02333_03_T01009_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019132234213_O02347_02_T02293_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019133011454_O02348_03_T02294_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019134015750_O02364_03_T04850_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019134233523_O02378_02_T03135_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019135010803_O02379_03_T03136_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019135224536_O02393_02_T04573_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019136001817_O02394_03_T04421_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019136215550_O02408_02_T04129_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019137223843_O02424_02_T05415_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019138001124_O02425_03_T02570_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019138214856_O02439_02_T00855_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019138232137_O02440_03_T00856_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019141205215_O02485_02_T02982_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019141222456_O02486_03_T02983_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019142200228_O02500_02_T05690_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019142213509_O02501_03_T05691_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019143191251_O02515_02_T01130_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019144195713_O02531_02_T00687_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019144213000_O02532_03_T04957_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019145190849_O02546_02_T00243_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019145204136_O02547_03_T04513_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019146182025_O02561_02_T04068_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019146195311_O02562_03_T01223_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019147203733_O02578_03_T00780_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019148181622_O02592_02_T03181_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019148194909_O02593_03_T00336_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019149172758_O02607_02_T04160_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019149190044_O02608_03_T04161_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019150163933_O02622_02_T02446_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019150181219_O02623_03_T03717_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019151185641_O02639_03_T03274_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019153154705_O02668_02_T02538_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019153171951_O02669_03_T02539_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019155154302_O02699_02_T04497_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019155171548_O02700_03_T01652_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019156145436_O02714_02_T05476_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019156162722_O02715_03_T02631_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019157140611_O02729_02_T05032_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019157153857_O02730_03_T02187_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019158131745_O02744_02_T00319_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019159140205_O02760_02_T01299_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019159153451_O02761_03_T01300_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019160131339_O02775_02_T03701_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019160144625_O02776_03_T05125_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019161122513_O02790_02_T03257_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019161135759_O02791_03_T00412_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019162144219_O02807_03_T01392_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019163122106_O02821_02_T02523_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019163135352_O02822_03_T03794_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019164113239_O02836_02_T04925_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019164130525_O02837_03_T02080_02_003_01_V002']
];

//var granule_list = require("users/alicezglr/default/granule_list.js");
//var granules = granule_list.granules
// load hessen vector: AOI
//var hessen = ee.FeatureCollection("projects/ee-ludwigm6/assets/gedi_hessen/hessen");
var hessen = ee.FeatureCollection("users/alicezglr/hessen");

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
  //while testing:
  var gedi_sample = gedi
  // Buffer the points and add time as property
  gedi_sample = gedi_sample.map(function(f){return f.buffer(12.5).set({time: gedi_date})})
  //print(gedi_sample)

//print("gedi buffer size: ", gedi_sample.size())
//print(gedi_sample, "W Time")
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
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 50)) // less than 80% cloud cover
    .select('B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B8A', 'B9', 'B11', 'B12', 'SCL')
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
/*
//visually check distribution of GEDI hulls
Map.centerObject(hessen)
var gediHull = gedi.geometry().convexHull();
Map.addLayer(gediHull, undefined, "gediHull");
*/
//print(g)
  //print("sampled_Points: ", sampledPoints.size())
  return sampledPoints

})

//print(results, "Sampled Points")



var resultsCollection = ee.FeatureCollection(results).flatten()

//print(resultsCollection.first(), "RES")


//print("size result collection: ", resultsCollection.size())
// save each GEDI orbit in a different file


Export.table.toDrive({
    collection: resultsCollection,
    description: "Res",
    fileNamePrefix: "gedi_",
    folder: "gedi"
  })
