/*eslint no-console:0 */
'use strict';

require('core-js/fn/object/assign');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/webpack.config');

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, config.host, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Listening at ', [config.host, config.port].join(':'));
});
