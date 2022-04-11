const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: path.resolve(__dirname, "/src/index.js"),
  build: path.resolve(__dirname, "dist"),
  index: path.join(__dirname, "public", "index.html")
};

module.exports = {
  entry: {
    app: PATHS.app,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(s(a|c)ss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "url-loader",
        options: {
          limit: 100000
        }
      },
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    alias: {
      components: __dirname + "/src/components",
      services: __dirname + "/src/services",
    },
    extensions: [".jsx", "..."],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.index
    }),
  ],
  output: {
    filename: "[name].js",
    path: PATHS.build,
    publicPath: "/",
    clean: true,
  },
};
