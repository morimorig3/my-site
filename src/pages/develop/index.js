import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import Board from 'components/board';
import DevelopList from 'components/developList';
import { IoConstructOutline } from 'react-icons/io5';
import * as contentful from 'contentful';
import { sortByDate, getAllPost } from 'lib/api';

const pageMeta = {
  title: 'Develop | morimorig3.com',
  description: 'morimorig3の制作物を紹介するページです。',
};

const Develop = ({ data }) => {
  const developData = data.items;
  console.log(developData);
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Board title="develop" ReactIcon={IoConstructOutline}>
          <div className="py-4">
            <DevelopList developData={sortByDate(developData, 'DESC')} />
          </div>
        </Board>
      </Layout>
    </>
  );
};

export default Develop;

export async function getStaticProps() {
  const data = await getAllPost({ content_type: 'developPost' });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}
