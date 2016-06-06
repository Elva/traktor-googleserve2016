var SetupCrops = require('../app/setup-crops');

describe("setup crops", function() {
  it("sets up crops correctly", function() {
    return SetupCrops.setupExpectedCrops();
  })
});
