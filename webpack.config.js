const path = require('path')

module.exports = {
  entry: {
    after: './before.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}
