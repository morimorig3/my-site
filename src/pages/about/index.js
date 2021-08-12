import SEO from 'components/seo';
import Layout from 'components/layout';

const pageMeta = {
  title: 'About me | morimorig3.com',
  description: 'morimorig3本人について紹介するページです。',
};

const About = () => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <p>about</p>
    </Layout>
  </>
);

export default About;
