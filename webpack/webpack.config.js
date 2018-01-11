'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const webpack = require('webpack');

// List of allowed environments
const allowedEnvs = ['development', 'stage', 'production', 'test'];

const ENV = process.env.NODE_ENV || 'development';
const envConfig = require(path.join(__dirname, 'webpack.config.' + ENV));

const moduleLoaders = require(path.join(__dirname, 'loaders'));

const mainPath = path.join(__dirname, '../');
const srcPath = path.join(__dirname, '../src');
const dfltPort = 8000;

process.env.REACT_WEBPACK_ENV = ENV;

// Add needed loaders to the defaults here
moduleLoaders.loaders.push({
    test: /\.jsx?$/,
    // loader: 'react-hot!babel-loader',
    loader: 'babel-loader',
    include: [ path.join(__dirname, '../src') ],
    query: {
        // https://babeljs.io/docs/usage/options/
        babelrc: false,
        presets: [
            'react',
            'es2015',
            'stage-0'
        ],
        plugins: [
            'transform-runtime',
            [
                'transform-react-remove-prop-types',
                'transform-react-constant-elements',
                'transform-react-inline-elements',
            ]
        ],
    },
});

module.exports = Object.assign({}, {
    additionalPaths: [],
    host: '0.0.0.0',
    port: dfltPort,
    debug: true,
    output: {
        path: path.join(__dirname, '../dist/assets'),
        filename: 'app.js',
        publicPath: '/assets/'
    },
    devServer: {
        contentBase: ['./src/', './dist/'],
        historyApiFallback: true,
        hot: true,
        port: dfltPort,
        publicPath: '/assets/',
        noInfo: false,
        quiet: false,
        stats: {
            colors: true,
            hash: true,
            timings: true,
            chunks: true,
            chunkModules: true,
            modules: true
        },
        headers: { },
        proxy: {
            '/api': {
                target: {
                    host: "action-js.dev",
                    protocol: 'http:',
                    port: 80
                },
                ignorePath: true,
                changeOrigin: true,
                secure: false
            }
        }
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            actions: `${srcPath}/actions/`,
            models: `${srcPath}/models/`,
            core: `${srcPath}/core/`,
            routes: `${srcPath}/routes/`,
            components: `${srcPath}/components`,
            sources: `${srcPath}/sources/`,
            store: `${srcPath}/store/`,
            icons: `${srcPath}/icons/`,
            styles: `${mainPath}/styles/`,
            statics: `${mainPath}/statics/`,
            data: `${mainPath}/data/`,
            node_modules: `${mainPath}/node_modules`
        }
    },
    module: moduleLoaders
}, envConfig);
