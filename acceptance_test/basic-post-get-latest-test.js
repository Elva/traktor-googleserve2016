/**
 * Simulates a flow where a crop price is posted, and then that is
 * retrieved via the get latest API.
 */

var assert = require('assert');
var RequestPromise = require('request-promise');

/*
 function makeRequest(path, method, json_body) {
 var options = {
 hostname: 'app',
 port: 5000,
 path: path,
 method: method
 };
 var body = undefined;
 if (json_body !== undefined) {
 body = JSON.stringify(json_body);
 options.headers = {
 'Content-Type': "application/json",
 'Content-Length': body.length
 };
 }
 return new Promise(function(resolve, reject) {
 var request = http.request(options, function(res) {
 res.setEncoding('utf8');
 res.on('data', )
 })
 })
 }
 */

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

describe("post and get lastest flow", function () {
  it("can hit the hello world endpoint", function () {
    return RequestPromise(uri_base + "/").then(function (response) {
      assert.equal(response, "Hello World!");
    })
  });

  it("works", function () {
    return getCropAndMarket().then(function (crop_and_market) {
      return postPrice(crop_and_market.crop.id, crop_and_market.market.id).then(function (response) {
        assert.equal(response, "succeeded");
      })
    });
  });
});
