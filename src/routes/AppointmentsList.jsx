import React from 'react';
import {connect} from 'react-redux';

import {Row, Col} from 'react-flexbox-grid/lib';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import Page from 'components/App/Page';
import Link from 'components/Link';

const styles = {
    fancyText: {
        fontFamily: '\'Rubik One\', sans-serif',
        fontSize: '3.5rem',
        fontWeight: '400'
    },
    autoCompleteWrapper: {
        marginLeft: '20px',
        marginRight: '20px'
    }
};

export default connect(
    (state) => state,
    (dispatch) => ({dispatch})
)(AppointmentsList);

function Appointments ({text, to}) {
    return (
        <Link to={to} title={text} >
            <span>
                {' ' + text + ' '}
            </span>
        </Link>
    );
}

function AppointmentsList () {
    return (
        <Page id={'appointmentsList-page'}
            page={'AppointmentsList-page'}
            title={'Future Jobs'}
            drawer={'AppointmentsList-page'} >

            <Row className="header-part" center="xs" middle="xs">
                <Col xs={11} sm={9} md={8} lg={8} >
                    <div style={{textAlign: 'center'}}>
                        Appointments List
                    </div>
                </Col>
            </Row>
        </Page>
    );
}
