/**
 * Created by gatoatigrado on 6/6/16.
 */

var _ = require('lodash');
var DBConnector = require('./db-connector');
var CropUtil = require('./crop-util');

var crops = [
  {
    name: "Barley"
  }, {
    name: "Canola"
  }, {
    name: "Cotton"
  }, {
    name: "Oat"
  }
];

// TODO: use real varieties
var cropVarieties = [
  {
    variety: "Oat #1",
    cropName: "Barley"
  }
];


// Returns a promise
function setupCrops() {
  return Promise.all(_.map(crops, function (crop) {
    return DBConnector.runQuery("SELECT * FROM traktor.crop WHERE name = $1", [crop.name])
      .then(function (results) {
        if (results.rowCount == 0) {
          return DBConnector.runQuery(
            "INSERT INTO traktor.crop(id, name) VALUES($1, $2)",
            [Math.floor(Math.random() * 100000), crop.name]
          );
        }
      })
  }));
}

function setupCropVarieties(crop_rows) {
  return Promise.all(_.map(cropVarieties, function (cropVariety) {
    var cropId = _.find(crop_rows, function (r) {
      return r.name == cropVariety.cropName;
    }).id;

    return DBConnector.runQuery(
      "SELECT * FROM traktor.crop_variety WHERE variety = $1",
      [cropVariety.variety]
    ).then(function (results) {
      if (results.rowCount == 0) {
        return DBConnector.runQuery(
          "INSERT INTO traktor.crop_variety(id, variety, crop_id) VALUES($1, $2, $3)",
          [Math.floor(Math.random() * 100000), cropVariety.variety, cropId]
        );
      }
    })
  }));
}

function setupExpectedCrops() {
  console.log("Setting up expected crops.");
  return setupCrops().then(function () {
    return CropUtil.getAllCrops().then(function (crops) {
      return setupCropVarieties(crops.rows);
    });
  });
}

module.exports = {
  setupExpectedCrops: setupExpectedCrops
};
