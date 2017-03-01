const vision = require('@google-cloud/vision');

const projectId = process.env.GCLOUD_PROJECT;

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
 * Returns an array of labels.
 */
function detectLabels(inputFile) {
  return new Promise(function(resolve, reject) {
    visionClient.detectLabels(inputFile)
      .then((data) => {
        const labels = data[0];
        resolve(labels);
      })
      .catch(err => reject(err));
  });
}

/**
 *  Returns a promise for a boolean value for whether or not a cat is in the image
 */
function catternaut(imageURL) {
  return new Promise((resolve, reject) => {
    detectLabels(imageURL)
      .then(labels => resolve(labels.includes('cat')))
      .catch((err) => reject(err));
  });
}

module.exports = {
  catternaut: catternaut,
  detectLabels: detectLabels
};
