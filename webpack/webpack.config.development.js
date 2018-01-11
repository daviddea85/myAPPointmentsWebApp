'use strict';

const webpack = require('webpack');
const BowerWebpackPlugin = require('bower-webpack-plugin');

const dfltPort = 8000;

module.exports = {
    entry: [
        './styles/App.scss',
        'webpack-dev-server/client?http://0.0.0.0:' + dfltPort,
        'webpack/hot/only-dev-server',
        './src/app'
    ],
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        })
    ],
};
