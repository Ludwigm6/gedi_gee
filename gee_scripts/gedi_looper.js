// INPUT -------------------------------


// input granules
// granule format: ["Name", "Date"]

/*
var granules = [
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2020330171806_O11074_02_T08735_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2020230081607_O09518_02_T01237_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019248025112_O04134_02_T00641_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2020243055419_O09718_03_T07757_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2021003022816_O11669_02_T07098_02_003_01_V002']
               ]
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
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019164130525_O02837_03_T02080_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019165104412_O02851_02_T04481_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019166130117_O02868_03_T02616_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019167104004_O02882_02_T05017_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019167121250_O02883_03_T05018_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019168095137_O02897_02_T00304_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019168112423_O02898_03_T04574_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019169090309_O02912_02_T01283_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019170094728_O02928_02_T03686_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019170112014_O02929_03_T00841_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019171085900_O02943_02_T03242_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019171103146_O02944_03_T00397_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019173102737_O02975_03_T03779_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019174080623_O02989_02_T02064_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019174093909_O02990_03_T02065_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019175071755_O03004_02_T04466_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019175085041_O03005_03_T01621_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019177071344_O03035_02_T00733_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019177084630_O03036_03_T05003_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019178062516_O03050_02_T00289_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019178075802_O03051_03_T00290_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019179053647_O03065_02_T04114_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019179070933_O03066_03_T01269_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019180044819_O03080_02_T02400_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019181053232_O03096_02_T01957_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019181070518_O03097_03_T03228_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019182044402_O03111_02_T04359_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019182061648_O03112_03_T01514_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019183035532_O03126_02_T01069_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019183052818_O03127_03_T05339_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019184061238_O03143_03_T04896_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019185035138_O03157_02_T04451_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019185052425_O03158_03_T04452_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019186030324_O03172_02_T05430_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019186043611_O03173_03_T02585_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019187021510_O03187_02_T04986_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019187034757_O03188_03_T04987_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019188043229_O03204_03_T02968_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019189021128_O03218_02_T02676_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019189034415_O03219_03_T03947_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019190012314_O03233_02_T02232_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019190025601_O03234_03_T03503_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019191003500_O03248_02_T03058_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019191020746_O03249_03_T03059_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019192025219_O03265_03_T01193_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019193003117_O03279_02_T03594_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019193020404_O03280_03_T02172_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019193234303_O03294_02_T03150_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019194011550_O03295_03_T01728_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019194225448_O03309_02_T05552_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019195233920_O03325_02_T05109_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019196011206_O03326_03_T02264_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019196225104_O03340_02_T04665_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019197002351_O03341_03_T01820_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019197220249_O03355_02_T05644_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019197233536_O03356_03_T04069_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019199002008_O03372_03_T03626_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019199215905_O03386_02_T01911_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019199233152_O03387_03_T03182_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019200211050_O03401_02_T01467_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019200224337_O03402_03_T01315_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019202223952_O03433_03_T00428_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019203201850_O03447_02_T01406_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019203215137_O03448_03_T05676_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019204193034_O03462_02_T00962_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019204210321_O03463_03_T05232_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019205184217_O03477_02_T00518_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019206192648_O03493_02_T04344_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019206205935_O03494_03_T01499_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019207183831_O03508_02_T05323_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019209170158_O03538_02_T04435_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019210174628_O03554_02_T02569_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019210191915_O03555_03_T03840_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019211165812_O03569_02_T02125_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019211183059_O03570_03_T03396_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019212174240_O03585_03_T02952_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019213182709_O03601_03_T03932_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019214160606_O03615_02_T03487_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019214173853_O03616_03_T00642_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019215151748_O03630_02_T03043_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019215165035_O03631_03_T03044_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019216142930_O03645_02_T02752_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019217164646_O03662_03_T00734_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019219133724_O03691_02_T01268_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019219151011_O03692_03_T05538_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019220124906_O03706_02_T03670_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019221133334_O03722_02_T00381_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019221150620_O03723_03_T00382_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019222124515_O03737_02_T01360_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019222141802_O03738_03_T05630_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019223115656_O03752_02_T00916_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019223132943_O03753_03_T05186_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019224110837_O03767_02_T00472_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019224141411_O03769_03_T04743_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019225115305_O03783_02_T04298_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019225132551_O03784_03_T04299_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019226110446_O03798_02_T01008_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019226123733_O03799_03_T05278_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019227101632_O03813_02_T04833_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019227114922_O03814_03_T04834_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019228123430_O03830_03_T02815_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019229101356_O03844_02_T02370_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019229114646_O03845_03_T03641_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019230092613_O03859_02_T00350_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019230105902_O03860_03_T04620_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019231083830_O03874_02_T05598_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019233083553_O03905_02_T00136_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019233100842_O03906_03_T04406_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019240060729_O04012_02_T04956_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019240074019_O04013_03_T02111_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019241051946_O04027_02_T02936_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019241065235_O04028_03_T04360_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019242043202_O04042_02_T02492_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019242060451_O04043_03_T03763_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019243034418_O04057_02_T04741_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019243064956_O04059_03_T01897_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019244042924_O04073_02_T04145_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019244060213_O04074_03_T04146_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019245034140_O04088_02_T05124_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019245051429_O04089_03_T02279_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019246025356_O04103_02_T03104_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019246042645_O04104_03_T00259_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019248025112_O04134_02_T00641_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019248042401_O04135_03_T04911_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019249020326_O04149_02_T01620_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019249033615_O04150_03_T02891_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019250011540_O04164_02_T05292_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019250024829_O04165_03_T02447_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019251033332_O04181_03_T01851_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019252011257_O04195_02_T05675_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019252024546_O04196_03_T02830_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019253002511_O04210_02_T00809_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019253015800_O04211_03_T00810_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019253233725_O04225_02_T01788_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019255015518_O04242_03_T05462_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019255233442_O04256_02_T02171_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019256010731_O04257_03_T03442_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019256224656_O04271_02_T00151_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019257001944_O04272_03_T01575_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019258224435_O04302_02_T03227_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019259001725_O04303_03_T01958_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019259215708_O04317_02_T02783_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019259232958_O04318_03_T01208_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019260210940_O04332_02_T02186_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019260224230_O04333_03_T03457_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019262210736_O04363_02_T05262_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019262224026_O04364_03_T02417_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019263202009_O04378_02_T00396_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019263215259_O04379_03_T04666_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019264193241_O04393_02_T01222_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019264210531_O04394_03_T05492_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019265215053_O04410_03_T00627_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019266193035_O04424_02_T02875_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019266210325_O04425_03_T02876_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019267184307_O04439_02_T02431_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019267201557_O04440_03_T03702_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019269201351_O04471_03_T02662_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019270175333_O04485_02_T04910_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019270192623_O04486_03_T03488_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019271170604_O04500_02_T02890_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019271183854_O04501_03_T00045_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019272161835_O04515_02_T00870_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019272175125_O04516_03_T05140_02_003_01_V002'],
['LARSE/GEDI/GEDI02_B_002/GEDI02_B_2019273183646_O04532_03_T00275_02_003_01_V002']
]


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
    //print("gedi filter size: ", gedi.size())
   // print(gedi)
  //while testing:
  var gedi_sample = gedi
  // Buffer the points and add time as property
  gedi_sample = gedi_sample.map(function(f){return f.buffer(12.5).set({time: gedi_date})})

  //print(gedi_sample)
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
//print(g)
  //print("sampled_Poimts: ", sampledPoints.size())
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
