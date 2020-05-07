import Link from 'next/link';

const Navigation = () => {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            &nbsp; | &nbsp;
            <Link href="/about-us">
                <a>About Us</a>
            </Link>
            &nbsp; | &nbsp;
            <Link href="/category/[id]" as="/category/">
                <a>Category</a>
            </Link>
        </div>
    );
}

export default Navigation;