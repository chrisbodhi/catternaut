const checkIfCatImage = require('./catternaut');
const detectLabels = require('./labelDetection');

// Returns a promise for a boolean value for whether or not a cat is in the image
exports.catternaut = function(imageURL) {
  return checkIfCatImage(imageURL, 10);
}

// Returns a JSON object of the labels and their confidences
exports.getLabels = function(inputFile, maxResults) {
  return detectLabels(inputFile, maxResults);
}
