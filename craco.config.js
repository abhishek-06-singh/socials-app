const CracoAlias = require("craco-alias");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = [
        (warning) =>
          warning.module &&
          warning.module.resource.includes("@react-aria") &&
          warning.message.includes("Failed to parse source map"),
      ];
      return webpackConfig;
    },
  },
};
