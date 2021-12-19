import Link from 'next/link';
import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import Board from 'components/board';
import Bio from 'components/bio';
import DevelopList from 'components/developList';
import { IoPersonOutline, IoConstructOutline } from 'react-icons/io5';
import { sortByDate, extractContentType, getAllPost } from 'lib/api';
import Card from 'components/Card';
import Container from 'components/layout/Container';
import TechnologyStack from 'components/TechnologyStack';

const pageMeta = {
  title: 'morimorig3.com',
  description: 'morimorig3の制作物や考えをまとめて紹介するページです。',
};

const Home = ({ data }) => {
  const allData = data.items;
  const developData = sortByDate(
    extractContentType(allData, 'developPost'),
    'DESC'
  );

  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container className="py-10">
          <h2 className="text-center font-bold text-lg mb-4">つくったもの</h2>
          <ul className="max-w-4xl mx-auto grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {developData.map(Card)}
          </ul>
        </Container>
        <Container className="bg-slate-50">
          <h2 className="text-center font-bold text-lg mb-4">好きな技術</h2>
          <TechnologyStack />
        </Container>
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
