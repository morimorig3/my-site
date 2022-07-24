import { InferGetStaticPropsType, NextPage } from 'next';
import { SEO } from '@/components/Seo';
import { GlobalLayout } from '@/components/layout/GlobalLayout';
import { CategoryHeader } from '@/components/CategoryHeader';
import { BlogCard } from '@/components/BlogCard';
import { MenuButton } from '@/components/layout/MenuButton';
import { CategoryList } from '@/components/CategoryList';
import { useToggleMenu } from '@/hooks/useToggleMenu';
import { getDataForBlogHome } from '@/lib/api';
import { getCategoryIDs, matchCategories } from '@/lib/utils';
import { SectionContainer } from '@/components/Common/SectionContainer';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const pageMeta = {
  title: `Blog`,
  description: `ブログの全記事一覧`,
  path: '/blog',
};

const Blog: NextPage<Props> = ({
  preview,
  allBlogHomeData: { blogPosts, categories },
}) => {
  const [isMenuOpen, toggleMenu] = useToggleMenu(false);
  return (
    <>
      <SEO meta={pageMeta} />
      <GlobalLayout>
        <SectionContainer>
          <CategoryHeader className="mb-5 md:mb-10">ブログ</CategoryHeader>
          <div className="md:flex gap-10">
            <div className="grow py-5 mx-auto">
              {blogPosts.length ? (
                <ul className="flex flex-col gap-6">
                  {blogPosts.map(
                    ({ title, publishDate, slug, sys: { id }, ...post }) => {
                      const categoryIDs = getCategoryIDs(post);
                      const matchedCategories = matchCategories(
                        categoryIDs,
                        categories
                      );
                      return (
                        <BlogCard
                          key={id}
                          title={title}
                          publishDate={publishDate}
                          slug={slug}
                          categories={matchedCategories}
                        />
                      );
                    }
                  )}
                </ul>
              ) : (
                <p className="text-center">表示する記事がありません。</p>
              )}
            </div>
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
        </SectionContainer>
        <MenuButton toggleMenu={toggleMenu} />
      </GlobalLayout>
    </>
  );
};

export default Blog;

export const getStaticProps = async ({ preview = false }) => {
  const allBlogHomeData = await getDataForBlogHome(preview);
  return {
    props: { preview, allBlogHomeData },
  };
};
