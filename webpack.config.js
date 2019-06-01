/**
 * Webpack configuration file
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    'main': './script/nc-2016.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]-[hash].js'
  },
  resolve: {
    alias: {
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'svg-inline-loader',
          options: {
            removeSVGTagAttrs: false
          }
        }]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: [
          'html-loader?' + JSON.stringify({
            collapseBooleanAttributes: false,
            collapseWhitespace: false
          })
        ]
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   sourceMap: false,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
};

