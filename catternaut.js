const fetchAndSaveImage = require('./imageFetch');
const {detectLabels} = require('./labelDetection');
const _ = require('lodash');

function getImageLabels(imageURL, maxResults, callback) {
  detectLabels(imageURL, maxResults, function(err, labels) {
    if (err) {
      console.log(`No labels returned\n${err}`);
      return
    }

    callback(labels)
  })
}

function checkLabelsForCat(labels) {
  const catLabel = _.find(labels, {desc: 'cat'});
  return !!catLabel;
}

function checkIfCatImage(imageURL, maxResults, callback) {
  getImageLabels(imageURL, 10, function(labels) {
    const isCatImage = checkLabelsForCat(labels);
    if (isCatImage) {
      callback(true);
    } else {
      callback(false);
    }
  });
}

module.exports = checkIfCatImage;

if (module === require.main) {
  if (process.argv.length !== 3) {
    console.log('Usage: node catternaut <imageURL>');
    process.exit(1);
  }
  const imageURL = process.argv[2];

  getImageLabels(imageURL, 10, function(labels) {
    const isCatImage = checkLabelsForCat(labels);
    if (isCatImage) {
      console.log('CAT');
    } else {
      console.log('NOT A CAT');
    }
  });
}