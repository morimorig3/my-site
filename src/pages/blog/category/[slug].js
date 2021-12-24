import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import Container from 'components/layout/Container';
import BlogCard from 'components/BlogCard';
import { getBlogCategorySlug, getBlogPostByCategory } from 'lib/api';

const Category = ({ posts, category, preview }) => {
  const { name: categoryName, slug: categorySlug } = category;
  const pageMeta = {
    title: `${categoryName} | Category | morimorig3.com`,
    description: `${categoryName}カテゴリーの記事一覧`,
  };
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container className="max-w-3xl mx-auto">
          <h2 className="text-center font-bold text-lg text-slate-800 mb-4">
            ブログ
          </h2>
          <ul className="max-w-4xl mx-auto flex flex-col gap-6">
            {posts.map((data) => {
              const id = data.sys.id;
              const { title, publishDate, slug } = data;
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
      </Layout>
    </>
  );
};

export default Category;

export async function getStaticProps({ params, preview = false }) {
  const { posts, category } = await getBlogPostByCategory(params.slug, preview);
  return {
    props: {
      preview,
      posts,
      category,
    },
  };
}

export async function getStaticPaths() {
  const allCategory = await getBlogCategorySlug();
  const existPostCategory = allCategory.filter(
    (category) => category.linkedFrom.entryCollection.total > 0
  );
  return {
    paths: existPostCategory?.map(({ slug }) => `/blog/category/${slug}`) ?? [],
    fallback: false,
  };
}
