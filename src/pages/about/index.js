import Image from 'next/image';
import { SEO } from '@/components/Seo';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { Bio } from '@/components/Bio';
import { Details } from '@/components/Details';
import 'zenn-content-css';
import jobPic from '../../../public/images/img_job_01.jpg';
import AAryu from '../../../public/images/AA_ryu.png';
import AAgairu from '../../../public/images/AA_gairu.png';
import AAkaiji from '../../../public/images/AA_kaiji.png';

const pageMeta = {
  title: 'About',
  description: 'morimorig3の自己紹介ページです。',
  path: '/about',
};

const About = () => (
  <>
    <SEO meta={pageMeta} />
    <Layout>
      <Container>
        <SectionHeader>自分のこと</SectionHeader>
        <Bio>
          趣味はゲームとアニメとパワースポット巡り。狭く深くのめり込むタイプ。
          <br />
          アイコンはともだちが描いてくれました（ありがとう）
        </Bio>
      </Container>
      <hr />
      <Container className="max-w-2xl mx-auto">
        <SectionHeader>やってきたこと</SectionHeader>
        <div className="znc">
          <div className="msg alert">
            <p>ここから先は推敲されていません。</p>
          </div>
          <Details
            className="mb-6 md:mb-10"
            title="2019/10:フロントエンド開発部"
            isOpen
          >
            <p>
              力を入れていたことは<strong>保守性の高いCSS</strong>と
              <strong>セマンティックなマークアップ</strong>をすることです。
              <a
                href="https://www.amazon.co.jp/dp/4844336355"
                target="_blank"
                rel="noreferrer"
              >
                書籍
              </a>
              などを参考にFLOCSS+MindBEMdingの構成での記述をしていました。
            </p>
            <h4>職務</h4>
            <ul>
              <li>ブランドサイト立ち上げ・リニューアル</li>
              <li>コーポレートサイトのリニューアル</li>
              <li>ランディングページ製作</li>
            </ul>
            <h4>使用技術</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript（ES5）</li>
              <li>Sass</li>
              <li>jQuery</li>
            </ul>
            <h4>自己研鑽</h4>
            <ul>
              <li>JavaScript応用（ES5のオブジェクト指向設計等）</li>
              <li>基本情報・応用情報</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Gatsby.js</li>
            </ul>
          </Details>
          <Details className="mb-6 md:mb-10" title="2019/01:Web更新部">
            <p>
              コーポレートサイト運用、バナーやサイネージ等のデジタルコンテンツ制作
            </p>
            <h4>職務</h4>
            <ul>
              <li>隔週のWebサイト更新</li>
              <li>バナーの新規製作</li>
              <li>デジタルサイネージのコンテンツ製作</li>
            </ul>
            <h4>使用技術</h4>
            <ul>
              <li>静的なhtml更新</li>
            </ul>
            <h4>自己研鑽</h4>
            <ul>
              <li>バニラJavaScriptの学習</li>
              <li>CSS設計</li>
              <li>Gulp</li>
              <li>基本的なデザインのこと</li>
            </ul>
          </Details>
          <Details
            className="mb-6 md:mb-10"
            title="2018/02:無職時代 〜独学編〜"
          >
            <p>
              市職員への道を諦め、迷い始めている最中、1枚の画像と出会いました。
            </p>
            <figure className="max-w-sm mx-auto">
              <Image
                src={jobPic}
                layout="responsive"
                alt="勝てる場所で誰よりも努力する。それが勝つための最強の法則"
              />
              <figcaption>
                <a
                  href="https://next.rikunabi.com/journal/20140819/"
                  target="_blank"
                  rel="noreferrer"
                >
                  【いつやるか？今でしょ！】林先生のキャリアパス「勝てる場所で誰よりも努力する。それが勝つための最強の法則」
                  | リクナビNEXTジャーナル
                </a>
              </figcaption>
            </figure>
            <p>
              まず、<strong>やりたいことよりできること</strong>
              を仕事にしようと決心します。そして、できることの中で
              <strong>得意なことの道を極めよう</strong>と考えました。
            </p>
            <p>
              自分の属性はものづくり・インターネット・ゲーム、最初に目についたのがウェブサイト作りでした。最初は
              <a
                href="https://www.amazon.co.jp/dp/4798142204"
                target="_blank"
                rel="noreferrer"
              >
                HTML5＆CSS3標準デザイン講座
              </a>
              を書店で買ってきてハンズオン。やっぱり自分の手で作り上げるものづくりって楽しいなぁというのが第一印象で、Webの世界へのめり込んでいきました。
            </p>
            <p>
              独学だけでも学べるのがこの業種の素晴らしいところです。しかし、転職活動となると苦戦しそうだと思い、デジタルハリウッド大阪校のWebデザイナー講座で3ヶ月ほどお世話になりました。
              <br />
              運よくクリエイターズオーディションというものに参加させていただき、そこで縁のあった現職の会社へスカウトという形で入社させていただくことになりました。
            </p>
            <p>
              卒業制作はワードプレスで作ったブログ機能のあるコーポレートサイトです。
            </p>
          </Details>
          <Details
            className="mb-6 md:mb-10"
            title="2016/12:無職時代 〜市職員編〜"
          >
            <p>
              市職員を目指して、公務員試験の勉強を行いました。
              <br />
              筆記試験は合格しましたが、面接で志望動機を論破されてしまい、道を変更することになります。あの時の面接官様には感謝しかありません。
            </p>
            <p>
              市職員編で得たものは多く、その後現在に至るまで役に立っています
              <strong>読書の習慣</strong>や<strong>新しい分野の勉強方法</strong>
              はこの1年間で身に着けることができました。
            </p>
          </Details>
          <Details
            className="mb-6 md:mb-10"
            title="2015/04:カスタマーエンジニア"
          >
            <p>量販店や飲食店のPOSレジの修理・点検を担当</p>
            <ul>
              <li>定期点検</li>
              <li>1日10件ほどの訪問修理</li>
              <li>POSレジ設置・導入</li>
              <li>POSレジ撤去</li>
            </ul>
            <p>長時間労働に耐えられず退職します。</p>
          </Details>
          <Details className="mb-6 md:mb-10" title="学生生活編（ネタ）">
            <h3>小学生</h3>
            <p>ごく普通の小学生</p>
            <ul>
              <li>得意科目は図工</li>
              <li>昼休みはコンピュータ室でおもしろフラッシュ倉庫</li>
              <li>
                放課後は友達の家に集まってゲーム（スマブラ、カスタムロボ、カービィのエアライド、激闘忍者大戦、etc）
              </li>
            </ul>
            <hr />
            <h3>中学生</h3>
            <ul>
              <li>剣道少年</li>
              <li>得意科目は歴史と技術</li>
              <li>
                ネトゲ仲間の中で無料FC2ブログを作るのがプチ流行（この時に初めてHTMLにふれる）
              </li>
              <li>
                モバゲータウン全盛期（
                <s>釣りサイトを作って超豪華なアバターにしてました</s>）
              </li>
            </ul>
            <hr />
            <h3>高校生</h3>
            <ul>
              <li>減るリアル友達、増えるネット友達</li>
              <li>
                友達がいないせいでテストの成績は優秀だった、大学へは推薦で入学
              </li>
            </ul>
            <hr />
            <h3>ゲーム</h3>
            <p>
              とあるゲームに出会いのめり込む
              <br />
              地元最強。ネットでも敵なしだと思っていたとき、オンライン大会（猛者ばかりの数百人規模）があるということを聞きつけて初参加
              <br />
              自分の実力を知る初めての機会だった
            </p>
            <figure className="max-w-sm mx-auto">
              <Image
                src={AAryu}
                layout="responsive"
                alt="俺は…俺より強い奴に会いに行く！"
              />
            </figure>
            <p>
              結果は惨敗
              <br />
              とんでもなく強いやつがウヨウヨいることを思い知らされる
              <br />
              追いつきたい・追い越したいと言う気持ちが燃えはじめる
            </p>
            <figure className="max-w-sm mx-auto">
              <Image
                src={AAgairu}
                layout="responsive"
                alt="国へ帰るんだなお前にも家族がいるだろう"
              />
            </figure>
            <p>そして、修行編へ・・・</p>
            <ul>
              <li>強いやつの動画を見る</li>
              <li>強いやつの真似をする</li>
              <li>強いやつと知り合いになる</li>
              <li>プレイ精度を上げるため実践練習を積む</li>
              <li>プレイ画面を録画して反省＆修正を繰り返す</li>
              <li>強いやつと一緒にプレイをする</li>
            </ul>
            <p>およそ1年後、何度目かの大会で優勝を果たす・・・</p>
            <figure className="max-w-sm mx-auto">
              <Image src={AAkaiji} layout="responsive" alt="カイジ" />
            </figure>
          </Details>
        </div>
      </Container>
    </Layout>
  </>
);

export default About;
