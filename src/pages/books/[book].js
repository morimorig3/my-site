import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import BookCard from 'components/bookCard';

import bookData from 'data/bookData';
import { IoBookOutline } from 'react-icons/io5';

const Book = ({ book }) => {
  const pageMeta = {
    title: `${book.title} | Books | morimorig3.com`,
    description: `${book.title}の感想を紹介しています。`,
  };
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Board title="recommend" ReactIcon={IoBookOutline}>
          <div className="py-4">
            <BookCard key={book.id} title={book.title} id={book.id} />
          </div>
        </Board>
      </Layout>
    </>
  );
};

export default Book;

export function getServerSideProps({ params }) {
  const id = params.book;
  const book = bookData[id];

  return { props: { book } };
}
