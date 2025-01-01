const { merge } = require("webpack-merge");
const singleSpaDefaults = require("craco-config-single-spa-react");

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      const singleSpaConfig = singleSpaDefaults({
        orgName: "personal", // Replace with your org name
        projectName: "app1", // Replace with App2 for App2 directory
      });

      return merge(singleSpaConfig, webpackConfig, {
        // Optional: Add custom webpack configurations here
      });
    },
  },
};
