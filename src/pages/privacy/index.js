import { SEO } from '@/components/Seo';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/SectionHeader';
import 'zenn-content-css';

const pageMeta = {
  title: 'プライバシーポリシー',
  description: '',
  path: '/privacy',
};

const Privacy = () => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Container>
        <SectionHeader>プライバシーポリシー・免責事項</SectionHeader>
        <div className="znc">
          <h3>プライバシーポリシー</h3>
          <h4>個人情報の利用目的</h4>
          <p>
            当ブログでは、お問い合わせの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
            <br />
            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
          </p>
          <h4>アクセス解析ツールについて</h4>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p>
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Googleアナリティクスサービス利用規約
            </a>
            のページや
            <a
              href="https://policies.google.com/technologies/ads?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              Googleポリシーと規約
            </a>
            ページをご覧ください。
          </p>
          <h4>広告について</h4>
          <p>
            「morimorig3.com」は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
          </p>
          <p>得られた収益はドメインなどの運営費用に当てられています。</p>
          <h3>免責事項</h3>
          <p>
            当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
            <br />
            また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
            <br />
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            <br />
            記事の内容は、所属する組織・団体とは関係なく、個人の発言です。
          </p>
          <h3>著作権について</h3>
          <p>
            当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。
            <br />
            当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、
            <a
              href="https://forms.gle/zh6isNmxAAEhM2iR6"
              target="_blank"
              rel="noopener noreferrer"
            >
              お問い合わせフォーム
            </a>
            よりご連絡ください。迅速に対応いたします。※お返事できない場合もございますのでご了承ください。
          </p>
          <h3>リンクについて</h3>
          <p>
            当ブログは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
            <br />
            ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
          </p>
        </div>
      </Container>
    </Layout>
  </>
);

export default Privacy;
