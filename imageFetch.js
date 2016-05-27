var request = require('request')
var fs = require('fs')

request('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4wdmW2mGrTj4In2et-g780oVp50gDVzObkaSSGZP94PHlFLN')
  .pipe(fs.createWriteStream('doodle.png'))