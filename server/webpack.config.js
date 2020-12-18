const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'static'),
  },
  module: { rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
  ]},
};
