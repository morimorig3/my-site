import { InferGetStaticPropsType, NextPage } from 'next';
import { SEO } from '@/components/Seo';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { Bio } from '@/components/Bio';
import { MarkdownBody } from '@/components/MarkdownBody';
import markdownToHtml from 'zenn-markdown-html';
import { getAbout } from '@/lib/api';

const pageMeta = {
  title: 'About',
  description: 'morimorig3の自己紹介ページです。',
  path: '/about',
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const About: NextPage<Props> = ({ about }) => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Container>
        <SectionHeader>自分のこと</SectionHeader>
        <Bio>
          趣味はゲームとアニメとパワースポット巡り。狭く深くのめり込むタイプ。
          <br />
          アイコンはともだちが描いてくれました（ありがとう）
        </Bio>
      </Container>
      <hr />
      <Container className="max-w-2xl mx-auto">
        {about.map(({ title, html }) => (
          <>
            <SectionHeader>{title}</SectionHeader>
            <MarkdownBody html={html} />
          </>
        ))}
      </Container>
    </Layout>
  </>
);

export default About;

export const getStaticProps = async ({ preview = false }) => {
  const data = await getAbout(preview);
  const about = data.map(({ title, content }) => {
    const html = markdownToHtml(content);

    return {
      title,
      html,
    };
  });

  return {
    props: { preview, about },
  };
};
