const CopyPlugin = require("copy-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./main.js",
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./index.html",
          to: `${__dirname}/dist/index.html`,
        },
        {
          from: "./qoutes.json",
          to: "dist/"
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  mode: "production",
  module: {},
};