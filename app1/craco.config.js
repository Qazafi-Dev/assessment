const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = {
  webpack: (config) => {
    const singleSpaConfig = singleSpaDefaults({
      orgName: "personal",
      projectName: "app1", // Replace with "app2" for the second app
      webpackConfigEnv: {},
      argv: {},
    });

    return merge(singleSpaConfig, config);
  },
};
