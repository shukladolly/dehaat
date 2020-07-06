module.exports = {
    mirror: require("../node_modules/libgen/lib/speed.js"),
    latest: require("../node_modules/libgen/lib/latest.js"),
    random: require("../node_modules/libgen/lib/random.js"),
    search: require("../node_modules/libgen/lib/search.js"),
    utils: {
      clean: require("../node_modules/libgen/lib/clean.js"),
      check: {
        hasField: require("../node_modules/libgen/lib/check.js"),
        canDownload: require("../node_modules/libgen/lib/speed.js")
      }
    }
  };