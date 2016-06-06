/**
 * Bridge stuff ... may go away if we design things better
 */

var DBConnector = require('./db-connector');

module.exports = {
  getAllMarkets: function () {
    return DBConnector.runQuery("SELECT * FROM traktor.market");
  }
};
