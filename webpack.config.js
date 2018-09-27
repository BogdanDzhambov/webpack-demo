const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './app/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};