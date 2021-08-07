import Head from 'next/head';
import Navi from '../components/Navi';

const Home = () => (
  <>
    <Head>
      <title>トップページ</title>
      <meta name="description" content="トップページのdescription" />
      <meta property="og:title" content="トップページのタイトル" />
      <meta property="og:description" content="トップページのdescription" />
    </Head>
    <div className="container mx-auto">
      <h1>トップページ</h1>
      <Navi />
    </div>
  </>
);

export default Home;
