/**
 * Functions related to raw price objects.
 */

var DBConnector = require('./db-connector');

function randId() {
  return Math.floor(Math.random() * 1000000000);
}

module.exports = {
  insertPrice: function (obj) {
    return DBConnector.runQuery(
      "INSERT INTO traktor.price(id, price, submit_ts, crop_variety_id, market_id) " +
      "VALUES ($1, $2, $3, $4, $5)",
      [randId(), obj.price, obj.submit_ts, obj.crop_variety_id, obj.market_id]
    );
  }
};
