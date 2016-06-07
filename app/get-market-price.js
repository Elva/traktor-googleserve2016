/**
 * Logic to handle submitting a new price.
 */

var DBConnector = require('./db-connector');

function cleanPriceRow(row) {
  row.price = parseFloat(row.price);
  return row;
}

function getLatestPrice(crop_variety_id, market_id) {
  return DBConnector.runQuery(
    "SELECT * FROM traktor.price WHERE crop_variety_id = $1 AND market_id = $2 " +
    "ORDER BY submit_ts DESC LIMIT 1",
    [crop_variety_id, market_id]
  ).then(function(result) {
    var rows = result.rows;
    return rows.length > 0 ? cleanPriceRow(rows[0]) : null;
  });
}

module.exports = {
  getLatestPrice: getLatestPrice
};
