import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

const Login = pure((props) => (
    <SvgIcon {...props}>
        <path d="M10,17.25V14H3V10H10V6.75L15.25,12L10,17.25M8,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H8A2,2 0 0,1 6,20V16H8V20H17V4H8V8H6V4A2,2 0 0,1 8,2Z" />
    </SvgIcon>
));
Login.displayName = 'Login';
Login.muiName = 'SvgIcon';

export default Login;
