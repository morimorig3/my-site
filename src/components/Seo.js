import Head from 'next/head';
import { getOgpUrl } from '@/lib/utils';

const homePage = 'https://www.morimorig3.com';

const SEO = ({ meta: { title, description, path } }) => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
    />
    <title>{`${title} - morimorig3.com`}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} - morimorig3.com`} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${homePage}${path}`} />
    <meta property="og:site_name" content={`${title} - morimorig3.com`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={getOgpUrl(title)} />
  </Head>
);

export default SEO;
