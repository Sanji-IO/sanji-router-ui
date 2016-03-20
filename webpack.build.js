'use strict';

var webpack = require('webpack');
var bourbon = require('node-bourbon').includePaths;
var config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-router-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjRouter';
config.externals = {
  angular: {
    root: 'angular',
    commonjs2: 'angular',
    commonjs: 'angular',
    amd: 'angular'
  },
  'angular-ui-router': {
    root: 'uiRouter',
    commonjs2: 'angular-ui-router',
    commonjs: 'angular-ui-router',
    amd: 'angular-ui-router'
  },
  'sanji-logger-ui': {
    root: 'sjLogger',
    commonjs2: 'sanji-logger-ui',
    commonjs: 'sanji-logger-ui',
    amd: 'sanji-logger-ui'
  }
};

config.plugins.push(
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);
module.exports = config;
