const checkIfCatImage = require('./catternaut');
const detectLabels = require('./labelDetection');

// Returns a boolean value for whether or not a cat is in the image
exports.catternaut = function(imageURL) {
  return checkIfCatImage(imageURL, 10)
    .then(function(isCatImage) {
      console.log('isCatImage in catternaut', isCatImage);
      return isCatImage;
    })
    .catch(function(err) {
      throw new Error(err);
    });
}

// Returns a JSON object of the labels and their confidences
exports.getLabels = function(inputFile, maxResults) {
  return detectLabels(inputFile, maxResults);
}
