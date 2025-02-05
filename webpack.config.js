const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "vue-mf",
    projectName: "styleguide",
    webpackConfigEnv,
    outputSystemJS: false,
  });

  const config = merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ["vue-loader"],
        },
      ],
    },
    externals: ["vue", "vue-router", /^@vue-mf\/.+/],
    plugins: [new VueLoaderPlugin()],
  });

  return config;
};
