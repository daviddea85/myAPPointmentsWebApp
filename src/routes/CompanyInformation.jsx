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
)(CompanyInformation);

function H ({text, to}) {
    return (
        <Link to={to} title={text} >
            <span>
                {' ' + text + ' '}
            </span>
        </Link>
    );
}

function CompanyInformation () {
    return (
        <Page id={'companyInformation-page'}
            page={'CompanyInformation-page'}
            title={'Future Jobs'}
            drawer={'CompanyInformation-page'} >

            <Row className="header-part" center="xs" middle="xs">
                <Col xs={11} sm={9} md={8} lg={8} >
                    <div style={{textAlign: 'center'}}>
                        Company Information
                    </div>
                </Col>
            </Row>
        </Page>
    );
}
