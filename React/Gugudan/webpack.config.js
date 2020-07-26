const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval', //production일 때 hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js'],
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
                    targets: {
                        browsers: ['> 1% in KR'], // browserslist
                    },
                    debug: true,
                }],
                '@babel/preset-react'
              ],
        pligins: [],
    },
}],
    },
plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
],
    output : {
    filename: 'app.js',
        path : path.join(__dirname, 'abc', '/app', 'dist'),
    },
};