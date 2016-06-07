/**
 * Implements the Node JS backend.
 */
var express = require('express');
var bodyParser = require('body-parser');
var CropUtil = require('./app/crop-util');
var MarketUtil = require('./app/market-util');
var SubmitReportedPrice = require('./app/submit-reported-price');
var GetMarketPrice = require('./app/get-market-price');

var app = express();
app.use(bodyParser());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/info/crop-varieties', function (req, res) {
  CropUtil.getAllCropVarieties().then(function (result) {
    res.send(result.rows);
  });
});

app.get('/info/markets', function (req, res) {
  MarketUtil.getAllMarkets().then(function (result) {
    res.send(result.rows);
  });
});

app.post("/market-price/:crop_variety/:market", function (req, res) {
  // TODO: use jsonschema
  SubmitReportedPrice.submitReportedPrice(
    req.body.price,
    req.body.datetime,
    req.params.crop_variety,
    req.params.market
  ).then(
    function () {
      res.send("succeeded");
    },
    function (e) {
      console.error(e);
      res.status(400).send("failed");
    }
  );
});

app.get("/market-price/:crop_variety/:market", function (req, res) {
  GetMarketPrice.getLatestPrice(parseInt(req.params.crop_variety), parseInt(req.params.market))
    .then(function (result) {
        res.send(result);
      },
      function (e) {
        console.error(e);
        res.status(400).send("failed");
      });
});

app.get("/price-trend/:crop_variety/:market/:time_bucket_resolution", function (req, res) {
  GetMarketPrice.getPriceTrend(req.params.crop_variety, req.params.market, req.params.time_bucket_resolution)
    .then(function (result) {
        res.send(result);
      },
      function (e) {
        console.error(e);
        res.status(400).send("failed");
      });
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
