const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "vue-mf",
    projectName: "styleguide",
    webpackConfigEnv
  });

  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.vue$/,
          use: ["vue-loader"]
        }
      ]
    },
    externals: ["vue", "vue-router", /^@vue-mf\/.+/],
    plugins: [new VueLoaderPlugin()]
  });
};
