const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
  }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../public'),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(m?js)|(ts)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};