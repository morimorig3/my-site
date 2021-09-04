import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import BookList from 'components/bookList';
import * as contentful from 'contentful';
import { IoBookOutline } from 'react-icons/io5';

const pageMeta = {
  title: 'Books | morimorig3.com',
  description: '読み終えた本の感想を紹介しています。',
};

const Books = ({ data }) => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Board title="recommend" ReactIcon={IoBookOutline}>
        <div className="py-4">
          <BookList bookData={data} />
        </div>
      </Board>
    </Layout>
  </>
);

export default Books;

export async function getStaticProps() {
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
    accessToken: process.env.CONTENT_DELIVERY_API_KEY,
  });
  const data = await client
    .getEntries({ content_type: 'bookPost' })
    .then((response) => response)
    .catch(console.error);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data: data.items } };
}
