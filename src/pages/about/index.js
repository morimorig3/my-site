import SEO from 'components/seo';
import Layout from 'components/layout';
import Board from 'components/board';
import Bio from 'components/bio';
import { IoPersonOutline } from 'react-icons/io5';

const pageMeta = {
  title: 'About me | morimorig3.com',
  description: 'morimorig3本人について紹介するページです。',
};

const About = () => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Board title="about me" ReactIcon={IoPersonOutline}>
        <div className="py-4">
          <Bio />
        </div>
      </Board>
    </Layout>
  </>
);

export default About;
