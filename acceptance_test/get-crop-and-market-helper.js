/**
 * Pick a random crop ID and market ID. Should be easy for the frontend, because
 * the frontend will keep around a list of all prices and markets.
 */

var assert = require('assert');
var RequestPromise = require('request-promise');

var uri_base = "http://app:5000";

function getCropAndMarket() {
  return RequestPromise(uri_base + "/info/markets").then(function (markets) {
    markets = JSON.parse(markets);
    assert.ok(markets.length > 0);
    return RequestPromise(uri_base + "/info/crop-varieties").then(function (cropVarieties) {
      cropVarieties = JSON.parse(cropVarieties);
      assert.ok(cropVarieties.length > 0);
      return {
        crop: cropVarieties[0],
        market: markets[0]
      };
    })
  });
}

module.exports = {
  getCropAndMarket: getCropAndMarket
};
