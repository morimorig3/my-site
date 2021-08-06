import Head from 'next/head';
import Navi from '../components/layout/navi';

const Develop = () => (
  <>
    <Head>
      <title>Develop</title>
      <meta name="description" content="Developのdescription" />
      <meta property="og:title" content="Developのタイトル" />
      <meta property="og:description" content="Developのdescription" />
    </Head>
    <h1>Develop</h1>
    <Navi />
  </>
);

export default Develop;
