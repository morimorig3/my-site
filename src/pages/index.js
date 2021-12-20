import SEO from 'components/seo';
import Layout from 'components/layout/Layout';
import { sortByDate, extractContentType, getAllPost } from 'lib/api';
import Card from 'components/Card';
import Container from 'components/layout/Container';
import TechnologyStack from 'components/TechnologyStack';
import Bio from 'components/Bio';

const pageMeta = {
  title: 'morimorig3.com',
  description: 'morimorig3の制作物や考えをまとめて紹介するページです。',
};

const Home = ({ data }) => {
  const allData = data.items;
  const developData = sortByDate(
    extractContentType(allData, 'developPost'),
    'DESC'
  );

  return (
    <>
      <SEO meta={pageMeta} />
      <Layout>
        <Container className="py-10">
          <h2 className="text-center font-bold text-lg text-slate-800 mb-2">
            つくったもの
          </h2>
          <p className="text-center text-gray-600 mb-4">
            サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
          </p>
          <ul className="max-w-4xl mx-auto grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {developData.map((data) => {
              const id = data.sys.id;
              const { title, summary, date, url, stacks } = data.fields;
              return (
                <Card
                  key={id}
                  title={title}
                  summary={summary}
                  date={date}
                  url={url}
                  stacks={stacks}
                />
              );
            })}
          </ul>
        </Container>
        <Container className="bg-slate-50 py-10">
          <h2 className="text-center font-bold text-lg text-slate-800 mb-4">
            好きな技術
          </h2>
          <TechnologyStack />
        </Container>
        <Container className="py-10">
          <Bio />
        </Container>
      </Layout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getAllPost();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: { data } };
}
