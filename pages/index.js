import Head from 'next/head';
import Navi from '../components/layout/navi';

const Home = () => (
  <>
    <Head>
      <title>トップページ</title>
      <meta name="description" content="トップページのdescription" />
      <meta property="og:title" content="トップページのタイトル" />
      <meta property="og:description" content="トップページのdescription" />
    </Head>
    <h1>トップページ</h1>
    <Navi />
  </>
);

export default Home;
