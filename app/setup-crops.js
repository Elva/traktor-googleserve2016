/**
 * Created by gatoatigrado on 6/6/16.
 */

var _ = require('lodash');
var DBConnector = require('./db-connector');

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

// Returns a promise
function setupExpectedCrops() {
  console.log("Setting up expected crops.");
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

module.exports = {
  setupExpectedCrops: setupExpectedCrops
};
