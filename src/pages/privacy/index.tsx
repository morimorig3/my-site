import markdownToHtml from 'zenn-markdown-html';

import type { InferGetStaticPropsType, NextPage } from 'next';

import { MarkdownBody } from '@/components/MarkdownBody';
import { SectionHeader } from '@/components/SectionHeader';
import { SEO } from '@/components/Seo';
import { Container } from '@/components/layout/Container';
import { Layout } from '@/components/layout/Layout';
import { getPrivacy } from '@/lib/api';

const pageMeta = {
  title: 'プライバシーポリシー',
  description: '',
  path: '/privacy',
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Privacy: NextPage<Props> = ({ html }) => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Container>
        <SectionHeader>プライバシーポリシー・免責事項</SectionHeader>
        {html && <MarkdownBody html={html.join('')} />}
      </Container>
    </Layout>
  </>
);

export default Privacy;

export const getStaticProps = async ({ preview = false }) => {
  const data = await getPrivacy(preview);
  const html = data.map(({ content }) => markdownToHtml(content));

  return {
    props: { preview, html },
  };
};
