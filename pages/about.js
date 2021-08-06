import Head from 'next/head';
import Navi from '../components/layout/navi';

const About = () => (
  <>
    <Head>
      <title>About</title>
      <meta name="description" content="Aboutのdescription" />
      <meta property="og:title" content="Aboutのタイトル" />
      <meta property="og:description" content="Aboutのdescription" />
    </Head>
    <h1>About</h1>
    <Navi />
  </>
);

export default About;
