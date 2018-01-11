import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

const Docs = pure((props) => (
    <SvgIcon {...props}>
        <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
    </SvgIcon>
));
Docs.displayName = 'Docs';
Docs.muiName = 'SvgIcon';

export default Docs;
