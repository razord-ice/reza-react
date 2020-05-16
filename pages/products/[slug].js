import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import { withApollo } from '~/lib/apollo';
import { GET_PRODUCTS } from '~/gql/product';
import Layout from '~components/layout';
import ProductDetail from '~/components/product-detail';


const ProductPage = () => {
    const { slug } = useRouter().query;
    const { loading, error, data } = useQuery(GET_PRODUCTS, {variables : { urlKey:slug }} );

    if (error) {
        return <h4>Error!!!</h4>
    }

    if(loading) {
        return <div>Loading...</div>
    }

    const product = data.products.items[0];

    const pageConfig = {
        title: product.name
    }

    return (
        <Fragment>
            <Layout pageConfig={pageConfig}>
                <ProductDetail
                    id={product.sku}
                    name={product.name}
                    image={product.image}
                    description={product.description.html}
                    product_sku={product.sku}
                    price={product.price_range.minimum_price}
                />
            </Layout>
        </Fragment>
    );
};

export default withApollo(ProductPage);