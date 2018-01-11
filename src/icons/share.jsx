import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

const Share = pure((props) => (
    <SvgIcon {...props}>
        <path d="M21,11L14,4V8C7,9 4,14 3,19C5.5,15.5 9,13.9 14,13.9V18L21,11Z" />
    </SvgIcon>
));
Share.displayName = 'Share';
Share.muiName = 'SvgIcon';

export default Share;
