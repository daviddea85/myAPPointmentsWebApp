import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

function App ({children}) {
    return (
        <div role='app'>
            {children}
        </div>
    );
}

export default connect(
    (state) => state,
    (dispatch) => ({dispatch})
)(App);
