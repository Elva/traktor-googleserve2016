/**
 * Makes sure the test environment is reasonable.
 */

var assert = require('assert');
var DBConnector = require('../app/db-connector');

describe("hello world test", function () {
  it("passes empty test", function () {
  });
  it("connects to the test DB", function () {
    return DBConnector.runQuery("select 1+1 AS oneplusone").then(function(result) {
      assert.equal(result.rows[0].oneplusone, 2);
    });
  });
});
