/**
 * Any bridge code necessary to communicate with the db
 */

var pg = require('pg');
var conString = process.env.DATABASE_URL || "postgres://postgres:Welcome123@localhost:5432/postgres";

function runQuery(query, values) {
  return new Promise(function(resolve, reject) {
    // This invocation connects using automatic connection pools
    pg.connect(conString, function(err, client, done) {
      if (err) {
        return reject(err);
      } else {
        client.query(query, (values === undefined ? [] : values), function (err, result) {
          done();
          return err ? reject(err) : resolve(result);
        });
      }
    });
  });
}

module.exports = {
  runQuery: runQuery
};
