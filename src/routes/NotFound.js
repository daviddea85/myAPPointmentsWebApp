import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import {Row, Col} from 'react-flexbox-grid/lib';

import Page from 'components/App/Page';

export default connect(
    (state) => state,
    (dispatch) => ({dispatch})
)(NotFoundPage);

function NotFoundPage ({ title }) {
    return (
        <Page id={'notfound-page'}
            page={'NotFound-page'}
            title={'Not Found'}
            drawer={'NotFound-page'} >

            <Row className="header-part" center="xs" middle="xs">
                <Col xs={11} sm={11} md={11} lg={11} >
                    <div style={{textAlign: 'left'}}>
                        <p>Sorry, the page you were trying to view does not exist.</p>
                        <p>
                            <a href='/' title='homepage'>Return to the Homepage</a>
                        </p>
                    </div>
                </Col>
            </Row>
        </Page>
    );
}
