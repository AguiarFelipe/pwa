const webpack = require('webpack');

module.exports = {
  entry: {
    'app.bundle': ['./js/app.js'],
    'service_worker': ['./sv.js']
  },
  output: {
    filename: '[name].js'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  watch: true,
  devtool: 'eval-source-map'
};