const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = {
  webpack: (config) => {
    const singleSpaConfig = singleSpaDefaults({
      orgName: "personal",
      projectName: "app2", // Your app name
      webpackConfigEnv: {},
      argv: {},
    });

    return merge(singleSpaConfig, config);
  },
};
