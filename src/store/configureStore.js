import nextTick from 'async/nextTick';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux'

import {appInit} from 'actions/App';

import preloadedState from './preloadedState';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    routing: routerReducer
});

export default function configureStore (initialState, location) {
    const store = createStore(
        rootReducer,
        preloadedState(initialState, location),
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );

    nextTick(() => {
        store.dispatch(appInit());
    });

    return store;
}
