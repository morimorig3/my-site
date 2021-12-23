import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import { getDataForHome, extractMatchCategory } from 'lib/api';
import Card from 'components/Card';
import Container from 'components/layout/Container';
import TechnologyStack from 'components/TechnologyStack';
import Bio from 'components/Bio';
import BlogCard from 'components/BlogCard';

const pageMeta = {
  title: 'morimorig3.com',
  description: 'morimorig3の制作物や考えをまとめて紹介するページです。',
};

const Home = ({ preview, allHomeData }) => {
  const { develop, blogPost, category } = allHomeData;

  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container className="py-10">
          <h2 className="text-center font-bold text-lg text-slate-800 mb-2">
            つくったもの
          </h2>
          <p className="text-center text-gray-600 mb-4">
            サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
          </p>
          <ul className="max-w-4xl mx-auto grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {develop.map((data) => {
              const id = data.sys.id;
              const { title, summary, date, url, stacks } = data;
              return (
                <Card
                  key={id}
                  title={title}
                  summary={summary}
                  date={date}
                  url={url}
                  stacks={stacks}
                />
              );
            })}
          </ul>
        </Container>
        <Container className="bg-slate-50 py-10">
          <h2 className="text-center font-bold text-lg text-slate-800 mb-4">
            好きな技術
          </h2>
          <TechnologyStack />
        </Container>
        <Container className="py-10">
          <h2 className="text-center font-bold text-lg text-slate-800 mb-4">
            ブログ
          </h2>
          <ul className="max-w-4xl mx-auto flex flex-col gap-6">
            {blogPost.map((data) => {
              const id = data.sys.id;
              const categoryId = data.category.sys.id;
              const { title, publishDate, slug } = data;
              const { name: categoryName, slug: categorySlug } =
                extractMatchCategory(categoryId, category);
              return (
                <BlogCard
                  key={id}
                  title={title}
                  publishDate={publishDate}
                  slug={slug}
                  category={categoryName}
                  categorySlug={categorySlug}
                />
              );
            })}
          </ul>
        </Container>
        <hr />
        <Container className="py-10">
          <Bio />
        </Container>
      </Layout>
    </>
  );
};

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
