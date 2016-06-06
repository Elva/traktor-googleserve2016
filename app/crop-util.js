/**
 * Bridge stuff ... should go away if we design things better
 */

var DBConnector = require('./db-connector');

module.exports = {
  getAllCrops: function () {
    return DBConnector.runQuery("SELECT * FROM traktor.crop");
  },
  getAllCropVarieties: function () {
    return DBConnector.runQuery("SELECT * FROM traktor.crop_variety");
  }
};
