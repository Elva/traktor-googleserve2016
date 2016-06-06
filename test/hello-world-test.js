/**
 * Makes sure the test environment is reasonable.
 */

var assert = require('assert');
var DBConnector = require('../app/db-connector');

describe("hello world test", function () {
  it("passes empty test", function () {
  });
  it("connects to the test DB", function () {
    return DBConnector.runQuery("select 1+1 AS oneplusone").then(function (result) {
      assert.equal(result.rows[0].oneplusone, 2);
    });
  });

  // NOTE: the db seems to have some conversion issues
  it("can query the market table", function () {
    return DBConnector.runQuery("select count(*) as count from traktor.market").then(function (result) {
      // check that it's parseable
      assert.equal(typeof(parseInt(result.rows[0].count)), "number");
    });
  });
});
