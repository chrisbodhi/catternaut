const express = require('express');
const _ = require('lodash')
const app = express();
const checkIfCatImage = require('./catternaut');

app.get('/', function (req, res) {
  const imageURL = _.get(req, 'query.image');
  if (!imageURL) {
    res.send('Provide the image URL as the "image" query parameter')
  }

  checkIfCatImage(imageURL, 10, function(isCatImage) {
    const isCatLabel = isCatImage ? 'CAT' : 'NOT CAT';
    res.send(`<img src=${imageURL}><h3>${isCatLabel}</h3>`);
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});