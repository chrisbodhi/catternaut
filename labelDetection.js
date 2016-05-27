var gcloud = require('gcloud');

// You must set the GOOGLE_APPLICATION_CREDENTIALS and GCLOUD_PROJECT
// environment variables to run this sample. See:
// https://github.com/GoogleCloudPlatform/gcloud-node/blob/master/docs/authentication.md
var projectId = process.env.GCLOUD_PROJECT || 'mewment-proto';
process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || 'keys.json';

// Initialize gcloud
gcloud = gcloud({
  projectId: projectId
});

// Get a reference to the vision component
var vision = gcloud.vision();

/**
 * Uses the Vision API to detect labels in the given file.
 */

module.exports.detectLabels = function(inputFile, callback) {
  // Make a call to the Vision API to detect the labels
  vision.detectLabels(inputFile, { verbose: true, maxResults: 8 }, function (err, labels) {
    if (err) {
      return callback(err);
    }
    callback(null, labels);
  });
}

// // Run the example
// function main(inputFile, callback) {
//   detectLabels(inputFile, function (err, labels) {
//     if (err) {
//       return callback(err);
//     }

//     callback(null, labels);
//   });
// }

// if (module === require.main) {
//   if (process.argv.length < 3) {
//     console.log('Usage: node labelDetection <inputFile>');
//     process.exit(1);
//   }
//   var inputFile = process.argv[2];
//   main(inputFile, console.log);
// }