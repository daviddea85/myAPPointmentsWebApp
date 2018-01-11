/*eslint no-console:0 */
'use strict';

require('core-js/fn/object/assign');

// Hacks to fix server-side rendering issues------------------------------------
require('babel-register')({
    ignore: /webpack|node_modules|flexboxgrid/,
    // only: /middleware|src/,
    extensions: ['.jsx', '.js']
});

const IS_FLEXBOXGRID = /flexboxgrid/g

require.extensions['.css'] = (module, filename) => {
    if (IS_FLEXBOXGRID.test(filename)) {
        return;
    } else {
        return module;
    }
};
//------------------------------------------------------------------------------

const webpack = require('webpack');
const express = require('express');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const config = require('./webpack/webpack.config');
const middleware = require('./src/middleware').default;

const PORT = process.env.PORT || config.port || 8000;
global.__ENVIRONMENT__ = process.env.NODE_ENV || 'development';

middleware({
    express: express,
    webpack: webpack,
    dev: dev,
    hot: hot,
    config: config
}).listen(PORT, () => {
    console.log('Server listening on', PORT);
});
