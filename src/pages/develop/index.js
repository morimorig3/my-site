import SEO from 'components/seo';
import Layout from 'components/layout';

const pageMeta = {
  title: 'Develop | morimorig3.com',
  description: 'morimorig3の制作物を紹介するページです。',
};

const Develop = () => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <p>develop</p>
    </Layout>
  </>
);

export default Develop;
