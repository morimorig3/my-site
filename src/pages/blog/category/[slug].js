import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import Container from 'components/layout/Container';
import CategoryHeader from 'components/CategoryHeader';
import BlogCard from 'components/BlogCard';
import { getBlogCategorySlug, getBlogPostByCategory } from 'lib/api';

const Category = ({ posts, category, preview }) => {
  const { name: categoryName, slug: categorySlug } = category;
  const pageMeta = {
    title: `${categoryName} | カテゴリー | morimorig3.com`,
    description: `${categoryName}カテゴリーの記事一覧`,
  };
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container className="max-w-3xl mx-auto">
          <CategoryHeader className="mb-10">{categoryName}</CategoryHeader>
          <div className="py-5 max-w-4xl mx-auto">
            {posts.length ? (
              <ul className="flex flex-col gap-6">
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
  return {
    paths: allCategory?.map(({ slug }) => `/blog/category/${slug}`) ?? [],
    fallback: false,
  };
}
