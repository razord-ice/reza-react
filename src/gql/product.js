import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
    query getProduct($urlKey: String!) {
        products(filter: { url_key: { eq: $urlKey } }) {
            items {
                name
                sku
                stock_status
                description {
                    html
                }
                image {
                    url
                    label
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
`;