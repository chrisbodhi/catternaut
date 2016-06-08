let gcloud = require('gcloud');
process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || 'keys.json';

gcloud = gcloud({
  projectId: process.env.GCLOUD_PROJECT
});

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  throw new Error('Missing credentials from Google.');
}

if (!process.env.GCLOUD_PROJECT) {
  throw new Error('Missing project name.');
}

// Get a reference to the vision component
const vision = gcloud.vision();

// Uses the Vision API to detect labels in the given file.
function detectLabels(inputFile, maxResults) {
  // Make a call to the Vision API to detect the labels
  return new Promise(function(resolve, reject) {
    vision.detectLabels(inputFile, { verbose: true, maxResults }, function(err, labels) {
      if (!err) {
        resolve(labels);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = detectLabels;
