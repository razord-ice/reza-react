import React from 'react';
import { withApollo } from '../lib/apollo';
import Layout from '../components/layout';

const Index = () => {
    const pageConfig = {
        title: "Homepage..."
    }

    return (
        <Layout pageConfig={pageConfig}>
            <div>
                <h1>Homepage</h1>
                <p>
                    Ut ea deserunt laborum aliqua anim deserunt quis do mollit
                    labore proident nisi. Elit ipsum non duis ipsum aute. Culpa
                    id minim occaecat elit eiusmod consequat elit mollit. Sit id
                    Lorem dolor veniam officia minim ipsum pariatur aute esse eu
                    duis qui ipsum.
                </p>
            </div>
        </Layout>
    );
}

export default (withApollo)(Index);