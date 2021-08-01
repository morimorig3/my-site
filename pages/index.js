import Link from 'next/link';
import Head from 'next/head';
const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' }];

const Home = () => (
  <>
    <Head>
      <title>トップページ</title>
      <meta name="description" content="これはトップページです" />
      <meta property="og:title" content="トップページ" />
      <meta property="og:description" content="これはトップページ" />
    </Head>
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          <Link href={`/products/${product.name}`}>
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <h1>Hello world</h1>
  </>
);

export default Home;
