import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const CATEGORIES_QUERY = gql`
    {
        categoryList {
            children {
                id
                name
                children {
                    id
                    name
                    children {
                        id
                        name
                    }
                }
            }
        }
    }
`;

const Navigation = () => {
    const { loading, data } = useQuery(CATEGORIES_QUERY, {
        fetchPolicy: 'network-only',
    });

    if(loading) {
        return <div>Loading...</div>
    }

    const categories = data.categoryList[0].children;

    return (
        <div>
            <nav className="section nav">
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    {categories.map((catLvl1, i) => {
                        return(
                            <li key={i}>
                                <Link
                                    href="/category/[id]"
                                    as={`/category/${catLvl1.id}`}
                                >
                                    <a>{catLvl1.name}</a>
                                </Link>
                                <ul className="dropdown">
                                    {catLvl1.children.map((catLvl2, j) => (
                                        <li key={j}>
                                            <Link
                                                href="/category/[id]"
                                                as={`/category/${catLvl2.id}`}
                                            >
                                                <a>{catLvl2.name}</a>
                                            </Link>
                                            <ul>
                                                {catLvl2.children.map((catLvl3, k) => (
                                                    <li key={k}>
                                                        <Link
                                                            href="/category/[id]"
                                                            as={`/category/${catLvl3.id}`}
                                                        >
                                                            <a>{catLvl3.name}</a>
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
        </div>
    );
}

export default Navigation;