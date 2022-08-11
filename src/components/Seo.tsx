import type { VFC } from 'react';

import Head from 'next/head';

import { getOgpUrl } from '@/lib/utils';

type Meta = {
  title: string;
  description: string;
  path: string;
};

type Props = {
  meta: Meta;
};

const HOME_PAGE = 'https://www.morimorig3.com';

export const SEO: VFC<Props> = ({ meta: { title, description, path } }) => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
    />
    <title>{`${title} - morimorig3.com`}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} - morimorig3.com`} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${HOME_PAGE}${path}`} />
    <meta property="og:site_name" content={`${title} - morimorig3.com`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={getOgpUrl(title)} />
  </Head>
);
