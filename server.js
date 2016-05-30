const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash')
const checkIfCatImage = require('./catternaut');

const app = express();
app.use(bodyParser.json());

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

app.post('/', function(req, res) {
  const imageURL = _.get(req, 'body.image');
  if (!imageURL) {
    res.send('Provide the image URL as the "image" property in the POST body')
  }

  checkIfCatImage(imageURL, 10, function(isCatImage) {
    const isCatLabel = isCatImage ? 'CAT' : 'NOT CAT';
    res.send(`<img src=${imageURL}><h3>${isCatLabel}</h3>`);
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});