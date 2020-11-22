let WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: {
    path: './src/main.js'
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new WriteFilePlugin()
  ]
};
