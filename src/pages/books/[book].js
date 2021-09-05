import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import BookCard from 'components/bookCard';
import { IoBookOutline } from 'react-icons/io5';
import * as contentful from 'contentful';
import { markdownToHtml, getAllPost } from 'lib/api';

const Book = ({ fields, markdown }) => {
  const pageMeta = {
    title: `${fields.title} | Books | morimorig3.com`,
    description: `${fields.title}の感想を紹介しています。`,
  };
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Board title="recommend" ReactIcon={IoBookOutline}>
          <div className="py-4 gap-4 grid grid-cols-1">
            <figure className="w-1/2 justify-self-center">
              <BookCard
                src={`https:${fields.image.fields.file.url}`}
                title={fields.title}
                width={fields.image.fields.file.details.image.width}
                height={fields.image.fields.file.details.image.height}
                layout="responsive"
              />
            </figure>
            <div>
              <h1 className="text-center font-bold">{fields.title}</h1>
              {markdown ? (
                <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
              ) : (
                <p>コンテンツ準備中…</p>
              )}
            </div>
          </div>
        </Board>
      </Layout>
    </>
  );
};

export default Book;

export async function getStaticProps({ params }) {
  const data = await getAllPost({
    content_type: 'bookPost',
    'fields.id[in]': params.book,
  });
  const bookData = data.items[0];
  const markdown = await markdownToHtml(bookData.fields.content || '');
  return { props: { fields: bookData.fields, markdown } };
}

export async function getStaticPaths() {
  const data = await getAllPost({ content_type: 'bookPost' });
  const bookData = data.items;

  const paths = bookData.map(({ fields }) => ({
    params: {
      book: fields.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
