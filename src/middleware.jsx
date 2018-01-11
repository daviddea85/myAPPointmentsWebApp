import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Router, match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';

import configureStore from 'store/configureStore';
import routes from './routes';
import App from 'components/App';
import HTML from 'components/App/HTML';

const PLACEHOLDER = `<!-- COMPONENT_HTML -->`;
const PLACEHOLDER_STATE = `// __INITIAL_STATE__`;
// const HTML = fs.readFileSync(path.join(__dirname, '../src/index.html')).toString('utf8');

export default ({express, webpack, dev, hot, config}) => {
    const server = express();
    const compiler = webpack(config);

    server.use(express.static(path.resolve(__dirname, '../dist')));

    server.use(dev(compiler, config.devServer));
    server.use(hot(compiler));

    server.get('*', (req, res) => {
        const location = req.url;

        match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
            if (error) {
                handleError(error);
            } else if (redirectLocation) {
                handleRedirect(res, redirectLocation);
            } else if (renderProps) {
                handleRoute(res, location, renderProps);
            } else {
                res.sendStatus(404);
            }
        });
    });

    return server;
};

function handleError (res, error) {
    res.status(500).send(error.message);
}

function handleRedirect (res, redirectLocation) {
    res.redirect(302, redirectLocation.pathname + redirectLocation.search);
}

function routeIsUnmatched (renderProps) {
    return renderProps.routes[renderProps.routes.length - 1].path === '*';
}

function handleRoute (res, location, renderProps) {
    const store = configureStore(null, location);
    const status = routeIsUnmatched(renderProps) ? 404 : 200;
    const readyOnAllActions = renderProps.components
        .filter((component) => !!component.readyOnActions)
        .map((component) => {
            return component.readyOnActions(store.dispatch, renderProps.params)
        });

    Promise.all(readyOnAllActions)
    .then(() => {
        res.status(status).send(renderHTML(
            RouterContext, renderProps, store
        ));
    }).catch(err => {
        console.error(err);
        res.status(500).send(err && err.message);
    });
}

function renderHTML (Component, componentProps, store) {
    const head = Helmet.rewind();
    const componentHtml = renderToStaticMarkup(
        <App store={store}>
            <Component {...componentProps} />
        </App>
    );
    const initialState = store.getState();
    const htmlStatic = renderToStaticMarkup(
        <HTML
            head={head} content={componentHtml}
            initialState={initialState}
            environment={process.env.NODE_ENV} />
    );

    return ['<!doctype html>', htmlStatic].join('\n');
}
