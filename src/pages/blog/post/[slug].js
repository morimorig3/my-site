import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import Container from 'components/layout/Container';
import PostHeader from 'components/PostHeader';
import {
  getBlogPostSlug,
  getBlogPostBySlug,
  extractMatchCategory,
} from 'lib/api';
import markdownToHtml from 'lib/markdownToHtml';

const BlogPost = ({ post, category, markdown, preview }) => {
  const { title, publishDate } = post;
  const { name: categoryName, slug: categorySlug } = category;
  const pageMeta = {
    title: `${title} | ブログ | morimorig3.com`,
    description: `${title}`,
  };
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container className="max-w-3xl mx-auto">
          <article>
            <PostHeader
              title={title}
              publishDate={publishDate}
              categoryName={categoryName}
              categorySlug={categorySlug}
            />
            <div className="py-10 markdown">
              {markdown ? (
                <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
              ) : (
                <p>コンテンツ準備中…</p>
              )}
            </div>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default BlogPost;

export async function getStaticProps({ params, preview = false }) {
  const { post, categories } = await getBlogPostBySlug(params.slug, preview);
  const category = extractMatchCategory(
    post.categoryCollection.items[0].sys.id,
    categories
  );
  const markdown = await markdownToHtml(post.content);
  return {
    props: {
      preview,
      post,
      category,
      markdown,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getBlogPostSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/post/${slug}`) ?? [],
    fallback: false,
  };
}
