const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT || 3000,
    compress: true,
    open: true,
    devMiddleware: {
      writeToDisk: (filePath) => {
        return /^(?!.*(hot)).*/.test(filePath);
      },
    }
  },
});