import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NAV_QUERY } from '~/gql/nav';
import Link from 'next/link';

const Header = ({active}) => {
    const { loading, data } = useQuery(NAV_QUERY, {
        fetchPolicy: 'network-only',
    });

    if(loading) {
        return <div>Loading...</div>
    }

    const categories = data.categoryList[0].children;

    return (
        <Fragment>
            <div className="header">
                <h3>REZA REACT</h3>
            </div>
            <nav className="section nav">
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    {categories.map((data, i) => {
                        return(
                            <li key={i}>
                                <Link
                                    href={`/category/${data.url_path}`}
                                    as={`/category/${data.id}`}
                                >
                                    <a>{data.name}</a>
                                </Link>
                                <ul className="dropdown">
                                    {data.children.map((data2, j) => (
                                        <li key={j}>
                                            <Link
                                                href={`/category/${data2.url_path}`}
                                                as={`/category/${data2.id}`}
                                            >
                                                <a>{data2.name}</a>
                                            </Link>
                                            <ul>
                                                {data2.children.map((data3, k) => (
                                                    <li key={k}>
                                                        <Link
                                                            href={`/category/${data3.url_path}`}
                                                            as={`/category/${data3.id}`}
                                                        >
                                                            <a>{data3.name}</a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </Fragment>
    );
};

export default Header;