import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import Container from 'components/layout/Container';
import Bio from 'components/Bio';
import PostHeader from 'components/PostHeader';
import { getBlogPostSlug, getBlogPostBySlug } from 'lib/api';
import { matchCategories, getCategoryIDs } from 'lib/utils';
import markdownToHtml from 'zenn-markdown-html';
import 'zenn-content-css';

const BlogPost = ({ post, allCategories, html, preview }) => {
  const { title, publishDate } = post;
  const categoryIDs = getCategoryIDs(post);
  const categories = matchCategories(categoryIDs, allCategories);
  const pageMeta = {
    title: `${title} | ブログ | morimorig3.com`,
    description: `${title}`,
  };
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container className="max-w-2xl mx-auto">
          <article>
            <PostHeader
              title={title}
              publishDate={publishDate}
              categories={categories}
            />
            <div className="py-5 znc">
              {html ? (
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
              ) : (
                <p>コンテンツ準備中…</p>
              )}
            </div>
          </article>
        </Container>
        <hr />
        <Container>
          <Bio />
        </Container>
      </Layout>
    </>
  );
};

export default BlogPost;

export async function getStaticProps({ params, preview = false }) {
  const { post, allCategories } = await getBlogPostBySlug(params.slug, preview);
  const html = await markdownToHtml(post.content);

  return {
    props: {
      preview,
      post,
      allCategories,
      html,
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
