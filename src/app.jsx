
import 'core-js/fn/object/assign';
import 'babel-polyfill';

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import FastClick from 'fastclick';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// https://github.com/callemall/material-ui/issues/4670
injectTapEventPlugin();

// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body);

import configureStore from 'store/configureStore';
import routes from './routes';
import App from 'components/App';

const store = configureStore(window.__INITIAL_STATE__, window.location.toString());

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <App store={store}>
        <Router history={history}>{routes}</Router>
    </App>,
    document.getElementById('app')
);
