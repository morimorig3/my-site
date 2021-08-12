import SEO from 'components/seo';
import Layout from 'components/layout';

const pageMeta = {
  title: 'Books | morimorig3.com',
  description: '読み終えた本の感想を紹介しています。',
};

const Books = () => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <p>Books</p>
    </Layout>
  </>
);

export default Books;
