'use strict';

const production = process.env.NODE_ENV === 'production';
if(production) require('dotenv').config({ path: `${__dirname}/.dev.env` });

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractPlugin('bundle-[hash].css'),
  new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __MAIN_URL__: JSON.stringify(process.env.MAIN_URL),
    __NODE_URL__: JSON.stringify(process.env.NODE_URL),
  }),
];

if (production) {
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}

module.exports = {
  plugins,
  entry: `${__dirname}/src/main.js`,
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-maps',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: process.env.CDN_URL,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets: ['react'],
          },
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(woff|woff2|ttf|eot|glyph|\.svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 6000,
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};