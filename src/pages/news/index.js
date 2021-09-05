import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import NewsList from 'components/newsList';
import { IoNewspaperOutline } from 'react-icons/io5';
import { sortByDate, getAllPost } from 'lib/api';

const pageMeta = {
  title: 'News | morimorig3.com',
  description: 'morimorig3の更新情報を紹介するページです。',
};

const News = ({ data }) => {
  const newsData = data.items;
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Board title="news" ReactIcon={IoNewspaperOutline}>
          <div className="py-4">
            <NewsList newsData={sortByDate(newsData, 'DESC')} />
          </div>
        </Board>
      </Layout>
    </>
  );
};

export default News;

export async function getStaticProps() {
  const data = await getAllPost({ content_type: 'newsPost' });
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}
