const path = require('path');

const MODE = process.env.NODE_ENV;

module.exports = {
  mode:MODE,
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}