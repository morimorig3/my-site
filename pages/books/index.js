import Head from 'next/head';
import Layout from '../../components/Layout';

const Books = () => (
  <>
    <Head>
      <title>Books me | morimorig3.com</title>
      <meta name="description" content="読み終えた本の感想を紹介しています。" />
      <meta property="og:title" content="Books me | morimorig3.com" />
      <meta
        property="og:description"
        content="読み終えた本の感想を紹介しています。"
      />
    </Head>
    <Layout>
      <p>Books</p>
    </Layout>
  </>
);

export default Books;
