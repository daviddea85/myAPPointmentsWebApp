import React, {Component, PropTypes} from 'react';
import { Provider } from 'react-redux';

import App from './App';

export default function AppProvider ({children, store}) {
    return (
        <Provider store={store}>
            <App >
                {children}
            </App>
        </Provider>
    );
};
