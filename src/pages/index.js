import Link from 'next/link';
import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Board from 'components/Board';
import {
  IoNewspaperOutline,
  IoPersonOutline,
  IoBookOutline,
  IoConstructOutline,
} from 'react-icons/io5';

const pageMeta = {
  title: 'morimorig3.com',
  description: 'morimorig3の制作物や戯言をまとめて紹介するページです。',
};

const Home = () => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Board title="news" ReactIcon={IoNewspaperOutline}>
        <ul>
          <li>○○の記事を公開しました。</li>
          <li>○○を作ってみました。</li>
          <li>このページを作りました。</li>
        </ul>
      </Board>
      <Board title="develop" ReactIcon={IoConstructOutline}>
        <p>develop</p>
        <div className="text-right">
          <Link href="/develop">
            <a className="inline-block text-sm hover:underline">もっとみる</a>
          </Link>
        </div>
      </Board>
      <Board title="books" ReactIcon={IoBookOutline}>
        <p>books</p>
        <div className="text-right">
          <Link href="/books">
            <a className="inline-block text-sm hover:underline">もっとみる</a>
          </Link>
        </div>
      </Board>
      <Board title="about me" ReactIcon={IoPersonOutline}>
        <p>content about</p>
        <div className="text-right">
          <Link href="/about">
            <a className="inline-block text-sm hover:underline">もっとみる</a>
          </Link>
        </div>
      </Board>
    </Layout>
  </>
);

export default Home;