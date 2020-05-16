import gql from 'graphql-tag';

export const GET_CATEGORY = gql`
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