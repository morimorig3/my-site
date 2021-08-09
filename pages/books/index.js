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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
      />
    </Head>
    <Layout>
      <p>Books</p>
    </Layout>
  </>
);

export default Books;
