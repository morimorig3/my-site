import Link from 'next/link';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import Bio from 'components/bio';
import BookList from 'components/bookList';
import DevelopList from 'components/developList';
import NewsList from 'components/newsList';
import {
  IoNewspaperOutline,
  IoPersonOutline,
  IoBookOutline,
  IoConstructOutline,
} from 'react-icons/io5';
import { sortByDate, extractContentType, getAllPost } from 'lib/api';

const pageMeta = {
  title: 'morimorig3.com',
  description: 'morimorig3の制作物や考えをまとめて紹介するページです。',
};

const Home = ({ data }) => {
  const allData = data.items;
  const newsData = sortByDate(extractContentType(allData, 'newsPost'), 'DESC');
  const developData = sortByDate(
    extractContentType(allData, 'developPost'),
    'DESC'
  );
  const bookData = extractContentType(allData, 'bookPost');

  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Board title="news" ReactIcon={IoNewspaperOutline}>
          <div className="py-4">
            <NewsList newsData={newsData} limit={3} />
          </div>
          <div className="text-right">
            <Link href="/news">
              <a className="inline-block text-sm hover:underline">もっとみる</a>
            </Link>
          </div>
        </Board>
        <Board title="develop" ReactIcon={IoConstructOutline}>
          <div className="py-4">
            <DevelopList developData={developData} />
          </div>
          <div className="text-right">
            <Link href="/develop">
              <a className="inline-block text-sm hover:underline">もっとみる</a>
            </Link>
          </div>
        </Board>
        <Board title="recommend" ReactIcon={IoBookOutline}>
          <div className="py-4">
            <BookList bookData={bookData} limit={6} />
          </div>
          <div className="text-right">
            <Link href="/books">
              <a className="inline-block text-sm hover:underline">もっとみる</a>
            </Link>
          </div>
        </Board>
        <Board title="about me" ReactIcon={IoPersonOutline}>
          <div className="py-4">
            <Bio />
          </div>
          <div className="text-right">
            <Link href="/about">
              <a className="inline-block text-sm hover:underline">もっとみる</a>
            </Link>
          </div>
        </Board>
      </Layout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getAllPost();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: { data } };
}
