import React from 'react';
import {connect} from 'react-redux';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import Layout from 'components/Layout';

const styles = {
    page: {
        color: 'rgb(255, 255, 255)',
    },
    grid: {
        marginTop: '7rem'
    }
};

export default connect(
    (state) => state,
    (dispatch) => ({dispatch})
)(Page);

function Page ({id, page, title, drawer, children}) {
    return (
        <Layout full={false}>
            <div id={id} className="page" style={styles.page}>
                <Grid style={styles.grid}>
                    {children}
                </Grid>
            </div>
        </Layout>
    );
}
