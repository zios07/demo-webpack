// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BowerResolvePlugin = require("bower-resolve-webpack-plugin");

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src/js'),
  CSS: path.resolve(__dirname, 'src/css'),
  SRC: path.resolve(__dirname, 'src'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    })
  ],
 
  resolve: {
    modules: ["bower_components", "node_modules"]
  },  
  
  module: {
    loaders: [
      { test: /\.css$/,loader: 'style-loader!css-loader'},
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
    },  
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ]
  }
};



