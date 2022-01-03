import { SEO } from '@/components/Seo';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { Bio } from '@/components/Bio';
import { PostHeader } from '@/components/PostHeader';
import { CategoryList } from '@/components/CategoryList';
import { MenuButton } from '@/components/layout/MenuButton';
import { useToggleMenu } from '@/hooks/useToggleMenu';
import { getBlogPostSlug, getDataForBlogPost } from '@/lib/api';
import { matchCategories, getCategoryIDs } from '@/lib/utils';
import markdownToHtml from 'zenn-markdown-html';
import 'zenn-content-css';

const BlogPost = ({
  blogPost: { title, publishDate, ...blogPost },
  categories,
  html,
  slug,
  preview,
}) => {
  const [isMenuOpen, toggleMenu] = useToggleMenu(false);
  const categoryIDs = getCategoryIDs(blogPost);
  const matchedCategories = matchCategories(categoryIDs, categories);
  const pageMeta = {
    title: title,
    description: title,
    path: `/blog/post/${slug}`,
  };
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container>
          <div className="md:flex gap-10">
            <article className="grow min-w-0">
              <PostHeader
                title={title}
                publishDate={publishDate}
                categories={matchedCategories}
              />
              <div className="py-5 znc break-all">
                {html ? (
                  <div dangerouslySetInnerHTML={{ __html: html }}></div>
                ) : (
                  <p>コンテンツ準備中…</p>
                )}
              </div>
            </article>
            {isMenuOpen ? (
              <aside className="z-10 duration-300 transition-all translate-y-0 opacity-1 py-10 px-4 md:p-0 bg-white w-screen md:w-full h-screen md:h-full pointer-events-auto md:pointer-events-auto fixed top-0 left-0 md:static md:opacity-100 basis-60 lg:basis-72 shrink-0">
                <CategoryList categories={categories} />
              </aside>
            ) : (
              <aside className="z-10 duration-300 transition-all translate-y-5 py-10 px-4 md:p-0 bg-white w-screen md:w-full h-screen md:h-full pointer-events-none md:pointer-events-auto fixed top-0 left-0 opacity-0 md:static md:opacity-100 basis-60 lg:basis-72 shrink-0">
                <CategoryList categories={categories} />
              </aside>
            )}
          </div>
        </Container>
        <hr />
        <Container>
          <Bio />
        </Container>
        <MenuButton toggleMenu={toggleMenu} />
      </Layout>
    </>
  );
};

export default BlogPost;

export async function getStaticProps({ params, preview = false }) {
  const slug = params.slug;
  const { blogPost, categories } = await getDataForBlogPost(slug, preview);
  const html = await markdownToHtml(blogPost.content);
  return {
    props: {
      preview,
      blogPost,
      categories,
      html,
      slug,
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
