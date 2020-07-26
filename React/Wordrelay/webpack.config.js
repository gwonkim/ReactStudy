const path = require('path');

module.exports = {
  name: 'number-baseball-dev',
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
            targets: {browsers: ['> 1% in KR']}, //browserslist
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
  plugins: [
    //new webpack.LoaderOptionPlugin({debug : true}),
  ],
  output: {
    path: path.join(__dirname, 'dist'), //실제 패스
    filename: 'app.js',
    publicPath: '/dist/',  //가상 경로 upp.use(express.static(__dirname, 'dist'));
  },
};