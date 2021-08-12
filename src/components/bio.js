import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/about/profile.jpg';
import { SiQiita, SiTwitter, SiGithub } from 'react-icons/si';

const URL = {
  twitter: 'https://twitter.com/morimorig3',
  github: 'https://github.com/morimorig3',
  qiita: 'https://qiita.com/morimorig3',
};

const Bio = () => {
  return (
    <div className="flex gap-x-4">
      <figure className="w-20 flex-shrink-0">
        <Image
          className="rounded-full"
          src={profilePic}
          alt="プロフィール画像"
        />
      </figure>
      <section className="flex-grow">
        <p className="font-bold mb-1">morimorig3</p>
        <p className="text-sm mb-2">
          JavaScriptが得意です。犬と読書と新しいものが好き。
        </p>
        <div className="flex gap-x-4">
          <Link href={URL.github} passHref>
            <a className="text-gray-500 hover:text-github">
              <SiGithub size="1.8em" />
            </a>
          </Link>
          <Link href={URL.twitter} passHref>
            <a className="text-gray-500 hover:text-twitter">
              <SiTwitter size="1.8em" />
            </a>
          </Link>
          <Link href={URL.qiita} passHref>
            <a className="text-gray-500 hover:text-qiita">
              <SiQiita size="1.8em" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Bio;
