import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import DevelopList from 'components/developList';
import { IoConstructOutline } from 'react-icons/io5';

const pageMeta = {
  title: 'Develop | morimorig3.com',
  description: 'morimorig3の制作物を紹介するページです。',
};

const Develop = () => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Board title="develop" ReactIcon={IoConstructOutline}>
        <div className="py-4">
          <DevelopList />
        </div>
      </Board>{' '}
    </Layout>
  </>
);

export default Develop;
