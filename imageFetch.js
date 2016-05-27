var request = require('request')
var fs = require('fs')

function fetchAndSaveImage(imageURL, pathToSave = 'image.jpeg') {
  request(imageURL)
    .pipe(fs.createWriteStream(pathToSave))
}
//'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4wdmW2mGrTj4In2et-g780oVp50gDVzObkaSSGZP94PHlFLN'

if (module === require.main) {
  if (process.argv.length !== 4) {
    console.log('Usage: node imageFetch <imageURL> <pathToSave>');
    process.exit(1);
  }
  var imageURL = process.argv[2];
  var pathToSave = process.argv[3];
  fetchAndSaveImage(imageURL, pathToSave);
}

module.exports = fetchAndSaveImage;