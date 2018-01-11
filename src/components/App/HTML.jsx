import React, { Component } from 'react';

const GOOGLE_ANALYTICS_SCRIPT = `
/* jshint ignore:start */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53563471-1', 'auto');
ga('send', 'pageview');
/* jshint ignore:end */
`;

export default function AppHelmet ({head, content, initialState, environment}) {
    const envInnerHtml = `window.__ENVIRONMENT__ = '${environment}'`;
    const stateInnerHtml = `window.__INITIAL_STATE__ = ${JSON.stringify(initialState || {})}`;

    return (
        <html>
            <head>
                {head.title.toComponent()}
                {head.meta.toComponent()}
                {head.link.toComponent()}
            </head>
            <body>
                <div id='app' dangerouslySetInnerHTML={{__html: content}} />

                <script dangerouslySetInnerHTML={{__html: envInnerHtml}} />
                <script dangerouslySetInnerHTML={{__html: stateInnerHtml}} />

                <script type="text/javascript" src="/assets/app.js" ></script>

                <script dangerouslySetInnerHTML={{__html: GOOGLE_ANALYTICS_SCRIPT}} />
            </body>

        </html>
    );
}
