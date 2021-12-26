import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import Container from 'components/layout/Container';
import CategoryHeader from 'components/CategoryHeader';
import BlogCard from 'components/BlogCard';
import { getBlogCategorySlug, getBlogPostByCategory } from 'lib/api';

const Category = ({ posts, categories, preview }) => {
  const { name: categoryName } = categories[0];
  const pageMeta = {
    title: `${categoryName} | カテゴリー | morimorig3.com`,
    description: `${categoryName}カテゴリーの記事一覧`,
  };
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container className="max-w-3xl mx-auto">
          <CategoryHeader className="mb-5 md:mb-10">
            {categoryName}
          </CategoryHeader>
          <div className="py-5 max-w-4xl mx-auto">
            {posts.length ? (
              <ul className="flex flex-col gap-6">
                {posts.map(({ title, publishDate, slug, sys: { id } }) => (
                  <BlogCard
                    key={id}
                    title={title}
                    publishDate={publishDate}
                    slug={slug}
                    categories={categories}
                  />
                ))}
              </ul>
            ) : (
              <p className="text-center">表示する記事がありません。</p>
            )}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Category;

export async function getStaticProps({ params, preview = false }) {
  const { posts, categories } = await getBlogPostByCategory(
    params.slug,
    preview
  );
  return {
    props: {
      preview,
      posts,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const allCategory = await getBlogCategorySlug();
  return {
    paths: allCategory?.map(({ slug }) => `/blog/category/${slug}`) ?? [],
    fallback: false,
  };
}
