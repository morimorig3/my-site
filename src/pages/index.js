import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import Card from 'components/Card';
import Container from 'components/layout/Container';
import SectionHeader from 'components/SectionHeader';
import TechnologyStack from 'components/TechnologyStack';
import Bio from 'components/Bio';
import BlogCard from 'components/BlogCard';
import { getCategoryIDs, matchCategories } from 'lib/utils';
import { getDataForHome } from 'lib/api';

const pageMeta = {
  title: 'morimorig3.com',
  description: 'morimorig3の制作物や考えをまとめて紹介するページです。',
};

const Home = ({
  preview,
  allHomeData: { developments, posts, allCategories },
}) => (
  <>
    <SEO meta={pageMeta} />
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
      <Container>
        <SectionHeader>Blog</SectionHeader>
        <ul className="max-w-4xl mx-auto flex flex-col gap-6">
          {posts.map(({ title, publishDate, slug, sys: { id }, ...post }) => {
            const categoryIDs = getCategoryIDs(post);
            const categories = matchCategories(categoryIDs, allCategories);
            return (
              <BlogCard
                key={id}
                title={title}
                publishDate={publishDate}
                slug={slug}
                categories={categories}
              />
            );
          })}
        </ul>
      </Container>
      <hr />
      <Container>
        <Bio />
      </Container>
    </Layout>
  </>
);

export default Home;

export async function getStaticProps({ preview = false }) {
  const allHomeData = (await getDataForHome(preview)) ?? [];
  if (!allHomeData) {
    return {
      notFound: true,
    };
  }
  return {
    props: { preview, allHomeData },
  };
}
