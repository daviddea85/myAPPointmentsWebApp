import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    red200,
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
    teal500,
    orange900
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        // primary1Color: cyan500,
        // primary1Color: blue800,
        primary1Color: teal500,
        // primary2Color: cyan700,
        primary2Color: cyan700,
        // primary3Color: grey400,
        primary3Color: grey400,
        // accent1Color: pinkA200,
        accent1Color: white,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        // disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        // clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack
    }
});

function Layout ({ children }) {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            {React.Children.only(children)}
        </MuiThemeProvider>
    );
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout;
