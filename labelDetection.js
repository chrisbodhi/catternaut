const vision = require('@google-cloud/vision');

const projectId = process.env.GCLOUD_PROJECT; // E.g. 'grape-spaceship-123'

if (!projectId) throw new Error('Missing project name.');

const visionClient = vision({
  projectId: projectId,
  keyFilename: './config/keys.json'
});

/**
 * Promise resolves with a Safe Search object:
 * safeSearch = {
     adult: false,
     medical: false,
     spoof: false,
     violence: true
   }
 */
function safeSearch(inputFile) {
  return new Promise((resolve, reject) => {
    visionClient.detectSafeSearch(inputFile)
      .then(res => resolve(res[0]))
      .catch(err => reject(err));
  });
}

/**
 * Uses the Vision API to detect labels in the given file.
 */
function detectLabels(inputFile, maxResults) {
  // Make a call to the Vision API to detect the labels
  return new Promise(function(resolve, reject) {
    visionClient.detectLabels(inputFile, { verbose: true, maxResults }, function(err, labels) {
      if (!err) {
        resolve(labels);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = {
  detectLabels: detectLabels,
  safeSearch: safeSearch
};
