import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import Container from 'components/layout/Container';
import CategoryHeader from 'components/CategoryHeader';
import BlogCard from 'components/BlogCard';
import { getBlogPost } from 'lib/api';
import { getCategoryIDs, matchCategories } from 'lib/utils';

const pageMeta = {
  title: `ブログ | morimorig3.com`,
  description: `ブログの全記事一覧`,
};

const Blog = ({ preview, allBlogData: { posts, allCategories } }) => {
  const pageMeta = {};
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container className="max-w-3xl mx-auto">
          <CategoryHeader className="mb-5 md:mb-10">ブログ</CategoryHeader>
          <div className="py-5 max-w-4xl mx-auto">
            {posts.length ? (
              <ul className="flex flex-col gap-6">
                {posts.map(
                  ({ title, publishDate, slug, sys: { id }, ...post }) => {
                    const categoryIDs = getCategoryIDs(post);
                    const categories = matchCategories(
                      categoryIDs,
                      allCategories
                    );
                    return (
                      <BlogCard
                        key={id}
                        title={title}
                        publishDate={publishDate}
                        slug={slug}
                        categories={categories}
                      />
                    );
                  }
                )}
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

export default Blog;

export async function getStaticProps({ preview = false }) {
  const allBlogData = (await getBlogPost(preview)) ?? [];
  if (!allBlogData) {
    return {
      notFound: true,
    };
  }
  return {
    props: { preview, allBlogData },
  };
}
