import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import propTypes from 'prop-types';

const App = ({ Component }) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <title>바이리뷰</title>
        </Head>
            <div>공통메뉴</div>
            <Component />
        </>
    )
};

App.propTypes = {
    Component : propTypes.elementType.isRequired,
}

export default App;