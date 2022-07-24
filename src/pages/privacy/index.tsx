import { InferGetStaticPropsType, NextPage } from 'next';
import { SEO } from '@/components/Seo';
import { GlobalLayout } from '@/components/layout/GlobalLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { MarkdownBody } from '@/components/MarkdownBody';
import markdownToHtml from 'zenn-markdown-html';
import { getPrivacy } from '@/lib/api';
import { SectionContainer } from '@/components/Common/SectionContainer';

const pageMeta = {
  title: 'プライバシーポリシー',
  description: '',
  path: '/privacy',
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Privacy: NextPage<Props> = ({ html }) => (
  <>
    <SEO meta={pageMeta} />
    <GlobalLayout>
      <SectionContainer>
        <SectionHeader>プライバシーポリシー・免責事項</SectionHeader>
        {html && <MarkdownBody html={html.join('')} />}
      </SectionContainer>
    </GlobalLayout>
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
