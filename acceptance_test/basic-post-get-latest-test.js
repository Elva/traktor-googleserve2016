/**
 * Simulates a flow where a crop price is posted, and then that is
 * retrieved via the get latest API.
 */

var assert = require('assert');
var RequestPromise = require('request-promise');
var GetCropAndMarketHelper = require('./get-crop-and-market-helper');

var uri_base = "http://app:5000";

function postPrice(crop, market) {
  var options = {
    method: "POST",
    uri: uri_base + "/market-price/" + crop + "/" + market,
    body: {
      price: 12.50,
      datetime: (new Date()).toISOString(),
      user: null
    },
    json: true
  };
  return RequestPromise(options);
}

function getLatestPrice(crop, market) {
  var options = {
    method: "GET",
    uri: uri_base + "/market-price/" + crop + "/" + market,
    json: true
  };
  return RequestPromise(options);
}

describe("post and get lastest flow", function () {
  it("can hit the hello world endpoint", function () {
    return RequestPromise(uri_base + "/").then(function (response) {
      assert.equal(response, "Hello World!");
    })
  });

  it("works", function () {
    return GetCropAndMarketHelper.getCropAndMarket().then(function (crop_and_market) {
      return postPrice(crop_and_market.crop.id, crop_and_market.market.id).then(function (response) {
        assert.equal(response, "succeeded");
        return getLatestPrice(crop_and_market.crop.id, crop_and_market.market.id)
          .then(function(response) {
            assert.equal(response.price, 12.5);
          });
      });
    });
  });
});
