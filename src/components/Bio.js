import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/images/profile.jpg';
import { SiQiita, SiTwitter, SiGithub } from 'react-icons/si';

const URL = {
  twitter: 'https://twitter.com/morimorig3',
  github: 'https://github.com/morimorig3',
  qiita: 'https://qiita.com/morimorig3',
};

export const Bio = ({ children }) => (
  <section className="flex flex-col	gap-1 items-center">
    <figure className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center">
      <div className="w-11/12 rounded-full overflow-hidden border-4 border-white">
        <Image src={profilePic} layout="responsive" alt="プロフィール画像" />
      </div>
    </figure>
    <h3 className="text-sm">morimorig3</h3>
    <p className="text-sm text-gray-400">Webエンジニア</p>
    {children && (
      <p className="text-sm text-gray-400 text-center">{children}</p>
    )}
    <div className="flex gap-x-2 justify-center">
      <Link href={URL.github}>
        <a className="text-gray-500 hover:text-github">
          <SiGithub size="1.6em" />
        </a>
      </Link>
      <Link href={URL.twitter}>
        <a className="text-gray-500 hover:text-twitter">
          <SiTwitter size="1.6em" />
        </a>
      </Link>
      <Link href={URL.qiita}>
        <a className="text-gray-500 hover:text-qiita">
          <SiQiita size="1.6em" />
        </a>
      </Link>
    </div>
  </section>
);
