module.exports = function override(config, env) {
  config.ignoreWarnings = [
    (warning) =>
      warning.module &&
      warning.module.resource.includes("@react-aria") &&
      warning.message.includes("Failed to parse source map"),
  ];
  return config;
};
