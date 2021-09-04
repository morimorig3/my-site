import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import NewsList from 'components/newsList';
import { IoNewspaperOutline } from 'react-icons/io5';
import * as contentful from 'contentful';
import { sortByDate } from 'lib/api';

const pageMeta = {
  title: 'News | morimorig3.com',
  description: 'morimorig3の更新情報を紹介するページです。',
};

const News = ({ data }) => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Board title="news" ReactIcon={IoNewspaperOutline}>
        <div className="py-4">
          <NewsList newsData={sortByDate(data, 'DESC')} />
        </div>
      </Board>
    </Layout>
  </>
);

export default News;

export async function getStaticProps() {
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
    accessToken: process.env.CONTENT_DELIVERY_API_KEY,
  });
  const data = await client
    .getEntries({ content_type: 'newsPost' })
    .then((response) => response)
    .catch(console.error);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data: data.items } };
}
