import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import BookList from 'components/bookList';
import { IoBookOutline } from 'react-icons/io5';

const pageMeta = {
  title: 'Books | morimorig3.com',
  description: '読み終えた本の感想を紹介しています。',
};

const Books = () => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Board title="recommend" ReactIcon={IoBookOutline}>
        <div className="py-4">
          <BookList />
        </div>
      </Board>
    </Layout>
  </>
);

export default Books;
