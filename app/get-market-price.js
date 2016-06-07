/**
 * Logic to handle submitting a new price.
 */

var _ = require('lodash');
var assert = require('assert');
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
  ).then(function (result) {
    var rows = result.rows;
    return rows.length > 0 ? cleanPriceRow(rows[0]) : null;
  });
}

function isNumeric(value) {
  return (typeof(value) == 'string') ? value.match(/^\d+$/) : (typeof(value) == 'number');
}

function doAdvancedQuery(conditions, row_fields, agg_fields, order_by) {
  var conditions_clauses = [];
  var select = [];
  var group_by = [];
  var values = [];
  var i = 1;
  _.forEach(row_fields, function (expr, name) {
    select.push(expr + " AS " + name);
    group_by.push("" + i);
    i++;
  });
  _.forEach(agg_fields, function (expr, name) {
    select.push(expr + " AS " + name);
  });

  var j = 1;
  _.forEach(conditions, function (c) {
    conditions_clauses.push(c.field + " " + c.operator + " $" + j);
    values.push(c.value);
    j++;
  });
  var query = "SELECT " + select.join(", ") +
    " FROM traktor.price " +
    (conditions_clauses.length ? " WHERE " + conditions_clauses.join(" AND ") : "") +
    " GROUP BY " + group_by.join(", ")
    + " " + (order_by ? order_by : "");
  console.log("Running compiled query", query, " ;; values", values);
  return DBConnector.runQuery(query, values);
}

/**
 * This function is a bit more sophisticated, since it allows crop / market to be
 * _all or _avg tokens.
 *
 * @param crop_variety_id int ID or _all or _avg
 * @param market_id int ID or _all or _avg
 * @param time_bucket_resolution: one of 'hour', 'day', 'week', 'month', 'quarter', 'year'.
 */
function getPriceTrend(crop_variety_id, market_id, time_bucket_resolution) {
  assert(_.includes(['hour', 'day', 'week', 'month', 'quarter', 'year'], time_bucket_resolution));
  var conditions = [];

  // all of these are stuck in the "GROUP BY"
  var row_fields = {
    ts_bucket: "date_trunc('" + time_bucket_resolution + "', submit_ts)"
  };

  var agg_fields = {
    price_avg: "avg(price)"
  };

  if (isNumeric(crop_variety_id)) {
    conditions.push({
      field: 'crop_variety_id',
      operator: '=',
      value: parseInt(crop_variety_id)
    });
    row_fields.crop_variety_id = "crop_variety_id";
  } else if (crop_variety_id == "_all") {
    row_fields.crop_variety_id = "crop_variety_id";
  } else if (crop_variety_id == "_avg") {
    // TODO: It doesn't realy make sense for both crop_variety_id and market_id to be avg
    // ...  in fact, we probably don't want to average over crops ever. So maybe throw
    // errors here.
  }

  if (isNumeric(market_id)) {
    conditions.push({
      field: 'market_id',
      operator: '=',
      value: parseInt(market_id)
    });
    row_fields.market_id = "market_id";
  } else if (market_id == "_all") {
    row_fields.market_id = "market_id";
  } else if (market_id == "_avg") {
  }

  return doAdvancedQuery(conditions, row_fields, agg_fields, "ORDER BY ts_bucket DESC").then(
    function (results) {
      return _.map(results.rows, function(row) {
        row.price_avg = parseFloat(row.price_avg);
        return row;
      });
    }
  );
}

module.exports = {
  getLatestPrice: getLatestPrice,
  getPriceTrend: getPriceTrend
};
