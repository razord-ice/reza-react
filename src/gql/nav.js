import gql from 'graphql-tag';

export const NAV_QUERY = gql`
    {
        categoryList {
            children {
                id
                name
                url_path
                children {
                    id
                    name
                    url_path
                    children {
                        id
                        name
                        url_path
                    }
                }
            }
        }
    }
`;