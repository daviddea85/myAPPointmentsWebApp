'use strict';

const path = require('path');

module.exports = {
    noParse: /node_modules\/quill\/dist/,
    preLoaders: [{
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '../src'),
        loader: 'eslint-loader'
    }],
    loaders: [{
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
        loaders: [
            'isomorphic-style-loader',
            `css-loader?${JSON.stringify({
                // CSS Modules https://github.com/css-modules/css-modules
                modules: true,
                localIdentName: '[hash:base64:4]',
                minimize: true,
            })}`,
            'postcss-loader?pack=default',
        ],
        exclude: /flexboxgrid/,
    }, {
      test: /\.css$/,
      loader: 'style!css?modules',
      include: /flexboxgrid/,
    }, {
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
    }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
    }, {
        test: /\.less/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
    }, {
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
    }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
    }, {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader'
    }, {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
    }, {
        test: /\.json$/,
        loader: 'json-loader',
    }, {
        test: /\.txt$/,
        loader: 'raw-loader',
    }]
};
