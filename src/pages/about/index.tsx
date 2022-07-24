import { InferGetStaticPropsType, NextPage } from 'next';
import { SEO } from '@/components/Seo';
import { GlobalLayout } from '@/components/Common/GlobalLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { Bio } from '@/components/Bio';
import { MarkdownBody } from '@/components/MarkdownBody';
import markdownToHtml from 'zenn-markdown-html';
import { getAbout } from '@/lib/api';
import { SectionContainer } from '@/components/Common/SectionContainer';

const pageMeta = {
  title: 'About',
  description: 'morimorig3の自己紹介ページです。',
  path: '/about',
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const About: NextPage<Props> = ({ about }) => (
  <>
    <SEO meta={pageMeta} />
    <GlobalLayout>
      <SectionContainer>
        <SectionHeader>自分のこと</SectionHeader>
        <Bio>
          趣味はゲームとアニメとパワースポット巡り。狭く深くのめり込むタイプ。
          <br />
          アイコンはともだちが描いてくれました（ありがとう）
          <br />
          <a
            className="underline"
            href="https://oho-keywords.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            101のキーワード
          </a>
        </Bio>
      </SectionContainer>
      <hr />
      <SectionContainer maxWidth="sm">
        {about.map(({ title, html }) => (
          <>
            <SectionHeader>{title}</SectionHeader>
            <MarkdownBody html={html} />
          </>
        ))}
      </SectionContainer>
    </GlobalLayout>
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
