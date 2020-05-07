import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../../lib/apollo';
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2,
} from 'react-html-parser';
import Link from 'next/link';
import Price from '../../components/price';

const CATEGORY = gql`
    query getCategoryById($id: String!) {
        categoryList(filters: { ids: { eq: $id } }) {
            name
            url_key
            image_path
            description
            products {
                items {
                    id
                    name
                    url_key
                    description {
                        html
                    }
                    small_image {
                        url
                    }
                    price_range {
                        minimum_price {
                            regular_price {
                                currency
                                value
                            }
                            final_price {
                                currency
                                value
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Category = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, loading } = useQuery(CATEGORY, {variables: {id: id}})

    if(loading) {
        return <div>Loading...</div>
    }
    const category = data.categoryList[0];
    
    const pageConfig = {
        title: category.name,
        className: 'page-category'
    };

    const renderCategoryInfo = () => {
        const imgBanner = () => {
            if (category.image_path) {
                return (
                    <div className="category-banner">
                        <img src={category.image_path} alt={category.name} />
                    </div>  
                )
            }
        };

        const catDesc = () => {
            if (category.description) {
                return (
                    <div className="category-desc">
                        {ReactHtmlParser(category.description)}
                    </div>
                );
            }
        };

        return (
            <div className="category-info">
                {imgBanner}
                {catDesc}
            </div>
        );
    };

    return (
        <Layout pageConfig={pageConfig}>
            {renderCategoryInfo}
            <div className="page-title-wrapper">
                <h1 className="page-title">
                    {category.name}
                </h1>
            </div>
            <div className="products-grid">
                <ol className="products list items product-items">
                    {category.products.items.map((item) => (
                        <li className="item product product-item">
                            <div className="product-item-info">
                                <div className="product-image">
                                    <img
                                        src={item.small_image.url}
                                        alt={item.name}
                                    />
                                </div>
                                <div className="product-info">
                                    <div className="product-name">
                                        <Link
                                            href="/product/[url_key]"
                                            as={`/product/${item.url_key}`}
                                        >
                                            <a>{item.name}</a>
                                        </Link>
                                    </div>
                                    <div className="product-price">
                                        <Price priceRange={item.price_range} />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </Layout>
    );
}

export default (withApollo)(Category);