const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  },
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  }
}
