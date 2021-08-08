import Head from 'next/head';
import Layout from '../../components/Layout';

const About = () => (
  <>
    <Head>
      <title>About me | morimorig3.com</title>
      <meta
        name="description"
        content="morimorig3本人について紹介するページです。"
      />
      <meta property="og:title" content="About me | morimorig3.com" />
      <meta
        property="og:description"
        content="morimorig3本人について紹介するページです。"
      />
    </Head>
    <Layout>
      <p>about</p>
    </Layout>
  </>
);

export default About;
