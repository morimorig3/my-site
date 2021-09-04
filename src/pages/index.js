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
import * as contentful from 'contentful';
import { sortByDate, extractContentType } from 'lib/api';

const pageMeta = {
  title: 'morimorig3.com',
  description: 'morimorig3の制作物や戯言をまとめて紹介するページです。',
};

const Home = ({ data }) => {
  const newsData = sortByDate(extractContentType(data, 'newsPost'), 'DESC');
  const developData = sortByDate(
    extractContentType(data, 'developPost'),
    'DESC'
  );
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Board title="news" ReactIcon={IoNewspaperOutline}>
          <div className="py-4">
            <NewsList newsData={newsData} />
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
            <BookList />
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
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
    accessToken: process.env.CONTENT_DELIVERY_API_KEY,
  });
  const data = await client
    .getEntries()
    .then((response) => response)
    .catch(console.error);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data: data.items } };
}
