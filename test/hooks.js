/**
 * Test DB setup and stuff
 */

var DBConnector = require('../app/db-connector');

before(function () {
  var fs = require('fs');
  var createSql = fs.readFileSync("sql/db_create.sql").toString();
  return DBConnector.runQuery('DROP SCHEMA IF EXISTS "traktor" CASCADE;').then(
    function () {
      return DBConnector.runQuery(createSql);
    }
  );
});
