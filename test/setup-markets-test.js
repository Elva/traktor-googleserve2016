/**
 * Tests that markets can be set up correctly
 */

var SetupMarkets = require('../app/setup-markets');

describe("setup markets", function() {
  it("sets up markets correctly", function() {
    return SetupMarkets.setupExpectedMarkets();
  })
});
