const _ = require('lodash');
const detectLabels = require('./labelDetection');

function getImageLabels(imageURL, maxResults) {
  return new Promise(function(resolve, reject) {
    detectLabels(imageURL, maxResults)
      .then(function(labels) {
        resolve(labels);
      })
      .catch(function(err) {
        reject(err);
      });
  });
}

function checkLabelsForCat(labels) {
  const catLabel = _.find(labels, {desc: 'cat'});
  return !!catLabel;
}

function checkIfCatImage(imageURL, maxResults) {
  return getImageLabels(imageURL, maxResults)
    .then(function(labels) {
      const isCatImage = checkLabelsForCat(labels);
      return isCatImage;
    })
    .catch(function(err) {
      throw new Error('checkIfCatImage catch:', err);
    })
}

module.exports = checkIfCatImage;
