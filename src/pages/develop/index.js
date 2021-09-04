import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import DevelopList from 'components/developList';
import { IoConstructOutline } from 'react-icons/io5';
import * as contentful from 'contentful';
import { sortByDate } from 'lib/api';

const pageMeta = {
  title: 'Develop | morimorig3.com',
  description: 'morimorig3の制作物を紹介するページです。',
};

const Develop = ({ data }) => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Board title="develop" ReactIcon={IoConstructOutline}>
        <div className="py-4">
          <DevelopList developData={sortByDate(data)} />
        </div>
      </Board>
    </Layout>
  </>
);

export default Develop;

export async function getStaticProps() {
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
    accessToken: process.env.CONTENT_DELIVERY_API_KEY,
  });
  const data = await client
    .getEntries({ content_type: 'developPost' })
    .then((response) => response)
    .catch(console.error);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data: data.items } };
}
