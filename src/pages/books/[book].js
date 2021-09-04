import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import BookCard from 'components/bookCard';
import * as contentful from 'contentful';

import { IoBookOutline } from 'react-icons/io5';

const Book = ({ data }) => {
  const pageMeta = {
    title: `${data.title} | Books | morimorig3.com`,
    description: `${data.title}の感想を紹介しています。`,
  };
  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Board title="recommend" ReactIcon={IoBookOutline}>
          <div className="py-4">
            <BookCard
              src={`https:${data.image.fields.file.url}`}
              title={data.title}
              width={data.image.fields.file.details.image.width}
              height={data.image.fields.file.details.image.height}
            />
            <p>準備中…</p>
          </div>
        </Board>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
    accessToken: process.env.CONTENT_DELIVERY_API_KEY,
  });
  const bookData = await client
    .getEntries({ content_type: 'bookPost' })
    .then((response) => response.items)
    .catch(console.error);

  // const data = bookData;
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

export async function getStaticProps({ params }) {
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
    accessToken: process.env.CONTENT_DELIVERY_API_KEY,
  });
  console.log('!!!!!!!!!-----------!!!!!!!!!');
  const data = await client
    .getEntries({
      content_type: 'bookPost',
      'fields.id[in]': params.book,
    })
    .then((response) => response.items)
    .catch(console.error);
  console.log(data, '---!!!!!!!!!!!!!');

  return { props: { data: data[0].fields } };
}

export default Book;
