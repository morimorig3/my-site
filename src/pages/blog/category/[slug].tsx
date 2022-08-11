import type {
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticPropsContext,
  NextPage,
} from 'next';

import { BlogCard } from '@/components/BlogCard';
import { CategoryHeader } from '@/components/CategoryHeader';
import { CategoryList } from '@/components/CategoryList';
import { SEO } from '@/components/Seo';
import { Container } from '@/components/layout/Container';
import { Layout } from '@/components/layout/Layout';
import { MenuButton } from '@/components/layout/MenuButton';
import { useToggleMenu } from '@/hooks/useToggleMenu';
import { getBlogCategorySlug, getDataForCategory } from '@/lib/api';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Category: NextPage<Props> = ({
  blogPosts,
  category,
  categories,
  slug,
  preview,
}) => {
  const [isMenuOpen, toggleMenu] = useToggleMenu(false);
  const { name: categoryName } = category[0];
  const pageMeta = {
    title: `${categoryName}カテゴリー記事一覧`,
    description: `${categoryName}カテゴリーの記事一覧`,
    path: `/blog/category/${slug}`,
  };
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container>
          <CategoryHeader className="mb-5 md:mb-10">
            {categoryName}
          </CategoryHeader>
          <div className="flex gap-10">
            <div className="grow py-5 mx-auto">
              {blogPosts.length ? (
                <ul className="flex flex-col gap-6">
                  {blogPosts.map(
                    ({ title, publishDate, slug, sys: { id } }) => (
                      <BlogCard
                        key={id}
                        title={title}
                        publishDate={publishDate}
                        slug={slug}
                        categories={category}
                      />
                    )
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
        </Container>
        <MenuButton toggleMenu={toggleMenu} />
      </Layout>
    </>
  );
};

export default Category;

export const getStaticProps = async ({
  params,
  preview = false,
}: GetStaticPropsContext) => {
  const slug = params.slug as string;
  const { blogPosts, category, categories } = await getDataForCategory(
    slug,
    preview
  );
  return {
    props: {
      preview,
      blogPosts,
      category,
      categories,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allCategory = await getBlogCategorySlug();
  return {
    paths: allCategory?.map(({ slug }) => `/blog/category/${slug}`) ?? [],
    fallback: false,
  };
};
