import React, { Fragment } from 'react';
import Header from '~/components/header';
import Head from 'next/head';

const Layout = ({children, pageConfig}) => {
    const { title } = pageConfig;
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="layout">
                <Header active/>
                {children}
            </div>
            <footer>
                &copy;Reza 2020
            </footer>
        </Fragment>
    );
};

export default Layout;