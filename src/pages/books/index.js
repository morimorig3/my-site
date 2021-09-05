import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import BookList from 'components/bookList';
import { IoBookOutline } from 'react-icons/io5';
import { getAllPost } from 'lib/api';

const pageMeta = {
  title: 'Books | morimorig3.com',
  description: '読み終えた本の感想を紹介しています。',
};

const Books = ({ data }) => {
  const bookData = data.items;
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Board title="recommend" ReactIcon={IoBookOutline}>
          <div className="py-4">
            <BookList bookData={bookData} />
          </div>
        </Board>
      </Layout>
    </>
  );
};

export default Books;

export async function getStaticProps() {
  const data = await getAllPost({ content_type: 'bookPost' });
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}
