/**
 * Created by gatoatigrado on 6/6/16.
 */

var _ = require('lodash');
var DBConnector = require('./db-connector');

var markets = [
  {
    name: "Tbilisi",
    latitude: 41.7151377,
    longitude: 44.8270960
  },
  {
    name: "Kutaisi",
    latitude: 42.2713974,
    longitude: 42.7054444
  }, {
    name: "Gori",
    latitude: 41.9854144,
    longitude: 44.1084110
  }
];

// Returns a promise
function setupExpectedMarkets() {
  return Promise.all(_.map(markets, function(market) {
    return DBConnector.runQuery("SELECT * FROM traktor.market WHERE name = $1", [market.name])
      .then(function(results) {
        if (results.rowCount == 0) {
          return DBConnector.runQuery(
            "INSERT INTO traktor.market(id, name, latitude, longitude) VALUES($1, $2, $3, $4)",
            [Math.floor(Math.random() * 100000), market.name, market.latitude, market.longitude]
          );
        }
      })
  }));
}

module.exports = {
  setupExpectedMarkets: setupExpectedMarkets
};
