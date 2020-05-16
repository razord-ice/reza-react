import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { withApollo } from '~/lib/apollo';
import ProductGrid from '~/components/product-grid';
import Layout from '~components/layout';
import { GET_CATEGORY } from '~/gql/category';

const CategoryPage = () => {
    const { id } = useRouter().query;
    const { data, loading, error } = useQuery(GET_CATEGORY, {variables : { id:id }} )

    if (error) {
        return <h4>Error!!!</h4>
    }

    if(loading) {
        return <div>Loading...</div>
    }

    const category = data.categoryList[0];

    const pageConfig = {
        title: category.name
    }

    return (
        <Fragment>
            <Layout pageConfig={pageConfig}>
                <h2 className="title-cat">{category.name}</h2>
                <ProductGrid data={category.products.items}/>
            </Layout>
        </Fragment>
    );
};

export default withApollo(CategoryPage);