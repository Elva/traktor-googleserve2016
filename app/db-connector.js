/**
 * Any bridge code necessary to communicate with the db
 */

var pg = require('pg');
var conString = process.env.DATABASE_URL || "postgres://postgres:Welcome123@localhost:5432/postgres";

function runQuery(query) {
  var client = new pg.Client(conString);
  return new Promise(function(resolve, reject) {
    client.connect(function(err) {
      if (err) {
        return reject(err);
      } else {
        client.query(query, function (err, result) {
          client.end();
          return err ? reject(err) : resolve(result);
        });
      }
    });
  });
}

module.exports = {
  runQuery: runQuery
};
