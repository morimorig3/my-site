import SEO from 'components/SEO';
import Layout from 'components/Layout';

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
