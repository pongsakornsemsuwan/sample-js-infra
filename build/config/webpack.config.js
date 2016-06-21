const PATH = require('path');

const webpack = require("webpack");

const ROOT = '../../';

const APP_FOLDER = PATH.resolve(__dirname, ROOT, 'app/');
const APP_ENTRY_FILE = PATH.resolve(__dirname, ROOT, APP_FOLDER, 'client/js/store.js');

var webpackConfig = {
    entry: APP_ENTRY_FILE,
    output: {
        path: './dist/app/server/public/js',
        filename: 'app.bundle.js'
    },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
         }]
     }
};

module.exports = webpackConfig;
