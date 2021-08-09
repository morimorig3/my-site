import Head from 'next/head';
import Layout from '../../components/Layout';

const Develop = () => (
  <>
    <Head>
      <title>Develop | morimorig3.com</title>
      <meta
        name="description"
        content="morimorig3の制作物を紹介するページです。"
      />
      <meta property="og:title" content="Develop | morimorig3.com" />
      <meta
        property="og:description"
        content="morimorig3の制作物を紹介するページです。"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
      />
    </Head>
    <Layout>
      <p>develop</p>
    </Layout>
  </>
);

export default Develop;
