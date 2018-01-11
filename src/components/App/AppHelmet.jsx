import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Content from 'components/Content';
import Footer from 'components/Footer';

import {Row, Col} from 'react-flexbox-grid/lib';


export default function AppHelmet ({children}) {
    return (
        <div className={'appHelmet'}>
            <Helmet
                title='Future Jobs'
                titleTemplate='Future Jobs - %s'
                link={[
                    {rel: 'icon', href: '/favicon.ico', role: 'favicon', type: 'image/x-icon'},
                    {rel: 'apple-touch-icon', href: 'apple-touch-icon.png'},
                    {rel: 'manifest', href: 'manifest.json'},
                    {rel: 'stylesheet', type: 'text/css', href: 'styles/App.css'},
                    {rel: 'stylesheet', type: 'text/css', href: 'styles/Roboto.font.css'},
                    {rel: 'stylesheet', type: 'text/css', href: 'styles/RubikOne.font.css'}
                ]}
                meta={[
                    {'char-set': 'utf-8'},
                    {'name': 'application-name', content: 'Future Jobs'},
                    {'name': 'mobile-web-app-capable', content: 'yes'},
                    {'name': 'theme-color', content: '#009688'},
                    {'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1'},
                    {'name': 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'},
                    {'name': 'description', 'content': `Future Jobs, a jobs
                        board for vacancies that follow the latest trends`},
                    {'name': 'keywords', 'content': `future,jobs,hobs board,board,remote,
                        remote ok,ok remote,remoteok,okremote,cryptopaid,crypto,vacancies,
                        contracts,projects,recruiters,employers,remote employers,
                        remote contracts,remote roles`}
                ]}/>
            <Row>
                <Col xs={12}>
                    <Header/>
                </Col>
            </Row>
            

            <Row>
                <Col xs={12} sm={2}>
                    <Menu/>
                </Col>
                <Col xs={12} sm={10}>
                    <Content>
                        {/* {children} */}
                    </Content>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Footer/>
                </Col>
            </Row>
        </div>
    );
}
