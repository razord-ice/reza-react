import { useRouter } from 'next/router';
import Layout from '../../components/layout';

const Category = () => {
    const router = useRouter();
    const { id } = router.query;

    const pageConfig = {
        title: id
    };

    return (
        <Layout pageConfig={pageConfig}>
            id: {id}
        </Layout>
    );
}

export default Category;