const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  mode: isProduction ? 'production' : 'development',
  target: 'node',
  entry: ['babel-polyfill', './src/server/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
