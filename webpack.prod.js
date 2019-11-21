const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const whitelister = require("purgecss-whitelister");

const common = require("./webpack.common.js");

const glob = require('glob');
const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
  site: path.resolve(__dirname, 'site')
}

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[hash:5].js",
    chunkFilename: "[id].[hash:5].css"
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),

      new PurgecssPlugin({
        paths: glob.sync(`${PATHS.site}/**/*`, { 
          nodir: true 
        }),
        whitelist: [
          'lazyloaded',
          ...whitelister([
            './src/styles/common/_syntax.scss',
            './src/styles/components/_code.scss'
          ]),
        ],
      }),

      new MiniCssExtractPlugin({
        filename: "[name].[hash:5].css",
        chunkFilename: "[id].[hash:5].css"
      }),

      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
