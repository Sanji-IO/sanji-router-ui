const webpack = require('webpack');
const config = require('./webpack.config.js');

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

config.module.rules = [
  {test: /\.js$/, loader: 'ng-annotate', exclude: /(node_modules)/, enforce: 'post'},
].concat(config.module.rules);

config.plugins.push(
  new webpack.optimize.DedupePlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    quiet: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
      dead_code: true
    }
  })
);
module.exports = config;
