/**
 * Tests that markets can be set up correctly
 */

var _ = require('lodash');
var assert = require('assert');
var submitReportedPrice = require('../app/submit-reported-price').submitReportedPrice;
var CropUtil = require('../app/crop-util');
var MarketUtil = require('../app/market-util');
var SetupCrops = require('../app/setup-crops');
var SetupMarkets = require('../app/setup-markets');
var GetMarketPrice = require('../app/get-market-price');
var clearDatabase = require('./hooks').clearDatabase;

function getCropsAndMarkets() {
  return Promise.all([CropUtil.getAllCropVarieties(), MarketUtil.getAllMarkets()]).then(
    function (values) {
      return {crops: values[0].rows, markets: values[1].rows};
    }
  );
}

function setupTestData() {
  return getCropsAndMarkets().then(function (result) {
    var oatId = _.find(result.crops, {variety: "Oat #1"}).id;
    var tbilisiId = _.find(result.markets, {name: "Tbilisi"}).id;
    var goriId = _.find(result.markets, {name: "Gori"}).id;

    return Promise.all([
      submitReportedPrice(10.0, "2016-06-01", oatId, tbilisiId),
      submitReportedPrice(15.0, "2016-06-02", oatId, tbilisiId),
      submitReportedPrice(20.0, "2016-06-03", oatId, tbilisiId),
      submitReportedPrice(12.0, "2016-06-04", oatId, tbilisiId),

      submitReportedPrice(11.0, "2016-06-01", oatId, goriId),
      submitReportedPrice(16.0, "2016-06-02", oatId, goriId),
      submitReportedPrice(21.0, "2016-06-03", oatId, goriId),
      submitReportedPrice(17.0, "2016-06-04", oatId, goriId)
    ]);
  });
}

function getPriceArray(results) {
  return _.map(results, function (row) {
    return row.price_avg;
  });
}

describe("test price trend api", function () {
  before("setup data", function () {
    return clearDatabase().then(function () {
      return Promise.all([SetupMarkets.setupExpectedMarkets(), SetupCrops.setupExpectedCrops()])
        .then(setupTestData);
    });
  });

  it("returns latest prices for given product/market", function () {
    return getCropsAndMarkets().then(function (result) {
      var oatId = _.find(result.crops, {variety: "Oat #1"}).id;
      var tbilisiId = _.find(result.markets, {name: "Tbilisi"}).id;

      return GetMarketPrice.getPriceTrend(oatId, tbilisiId, "day").then(function (results) {
        assert.deepEqual(getPriceArray(results), [12, 20, 15, 10]);
      })
    });
  });

  it("returns latest prices for given product/market, grouped by year", function () {
    return getCropsAndMarkets().then(function (result) {
      var oatId = _.find(result.crops, {variety: "Oat #1"}).id;
      var tbilisiId = _.find(result.markets, {name: "Tbilisi"}).id;

      return GetMarketPrice.getPriceTrend(oatId, tbilisiId, "year").then(function (results) {
        assert.deepEqual(getPriceArray(results), [14.25]);
      })
    });
  });

  it("returns average prices for given product over all markets", function () {
    return getCropsAndMarkets().then(function (result) {
      var oatId = _.find(result.crops, {variety: "Oat #1"}).id;

      return GetMarketPrice.getPriceTrend(oatId, "_avg", "day").then(function (results) {
        assert.deepEqual(getPriceArray(results), [14.5, 20.5, 15.5, 10.5]
        );
      })
    });
  });

  it("returns average prices for all products over all markets", function () {
    return getCropsAndMarkets().then(function (result) {
      var oatId = _.find(result.crops, {variety: "Oat #1"}).id;

      return GetMarketPrice.getPriceTrend("_all", "_avg", "day").then(function (results) {
        assert.deepEqual(
          _.map(results, function (row) {
            return row.crop_variety_id;
          }),
          [oatId, oatId, oatId, oatId]
        );
        assert.deepEqual(getPriceArray(results), [14.5, 20.5, 15.5, 10.5]);
      })
    });
  });
});
