const path = require('path');

module.exports = {
  name: 'RCP',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {browsers: ['> 1% in KR']}, 
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-hot-loader/babel'],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, 'dist'), 
    filename: 'app.js',
    publicPath: '/dist/',
  },
};