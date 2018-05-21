const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build/public'),
  },
};

module.exports = merge(baseConfig, config);
