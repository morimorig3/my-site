import Link from 'next/link';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import Bio from 'components/bio';
import BookCard from 'components/bookCard';
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
        <div className="py-4">
          <p>develop</p>
        </div>
        <div className="text-right">
          <Link href="/develop">
            <a className="inline-block text-sm hover:underline">もっとみる</a>
          </Link>
        </div>
      </Board>
      <Board title="recommend" ReactIcon={IoBookOutline}>
        <div className="py-4">
          <div className="flex flex-wrap justify-center gap-4">
            <BookCard
              title="SOFT SKILLS ソフトウェア開発者の人生マニュアル"
              id="4822251551"
            />
            <BookCard
              title="CAREER SKILLS ソフトウェア開発者の完全キャリアガイド"
              id="4822255743"
            />
            <BookCard title="リーダブルコード" id="4873115655" />
            <BookCard title="達人プログラマー" id="4274226298" />
            <BookCard title="嫌われる勇気" id="4478025819" />
            <BookCard title="地上最強の商人" id="4930838908" />
            <BookCard title="人蕩し術" id="4891014016" />
          </div>
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

export default Home;
