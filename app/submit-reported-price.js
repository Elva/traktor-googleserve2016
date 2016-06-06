/**
 * Logic to handle submitting a new price.
 */

var PriceUtil = require('./price-util');

function submitReportedPrice(price, date, crop_variety_id, market_id) {
  var timestamp = ((date instanceof Date) ? date : new Date(date));
  return PriceUtil.insertPrice({
    price: parseFloat(price),
    submit_ts: timestamp,
    crop_variety_id: parseInt(crop_variety_id),
    market_id: parseInt(market_id)
  })
}

module.exports = {
  submitReportedPrice: submitReportedPrice
};
