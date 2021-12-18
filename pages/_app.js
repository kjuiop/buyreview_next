import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import propTypes from 'prop-types';

import GlobalStyle from '../components/GlobalStyle';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>바이리뷰</title>
            </Head>
            <GlobalStyle>
                <Component />
            </GlobalStyle>
        </>
    )
};

App.propTypes = {
    Component: propTypes.elementType.isRequired,
}

export default App;