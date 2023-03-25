import { InferGetStaticPropsType, NextPage } from 'next';
import { SEO } from '@/components/Seo';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/Card';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { TechnologyStack } from '@/components/TechnologyStack';
import { Bio } from '@/components/Bio';
import { getDataForHome } from '@/lib/api';
import { isProductionEnv } from '@/functions/isProductionEnv';
import { DevelopHeader } from '@/components/DevelopHeader';

const pageMeta = {
  title: 'TOP',
  description:
    'morimorig3のポートフォリオサイトです。製作物の紹介やブログでの知見共有・情報発信を行っています。',
  path: '/',
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ preview, allHomeData: { developments } }) => (
  <>
    <SEO meta={pageMeta} />
    {!isProductionEnv() && <DevelopHeader />}
    <Layout>
      <Container>
        <SectionHeader>Develop</SectionHeader>
        <ul className="max-w-4xl mx-auto grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {developments.map(
            ({ title, summary, date, url, stacks, sys: { id } }) => (
              <Card
                key={id}
                title={title}
                summary={summary}
                date={date}
                url={url}
                stacks={stacks}
              />
            )
          )}
        </ul>
      </Container>
      <Container className="bg-slate-50">
        <SectionHeader>Experience</SectionHeader>
        <TechnologyStack />
      </Container>
      <hr />
      <Container>
        <Bio />
      </Container>
    </Layout>
  </>
);

export default Home;

export const getStaticProps = async ({ preview = false }) => {
  const allHomeData = await getDataForHome(preview);

  return {
    props: { preview, allHomeData },
  };
};
