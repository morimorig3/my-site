import Navi from 'components/navi';
import Link from 'next/link';
import { RiQuillPenFill } from 'react-icons/ri';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="h-20 flex justify-between items-center">
        <Link href="/">
          <a className="font-righteous block text-center text-xl leading-none font-bold text-gray-100">
            morimorig3.com
          </a>
        </Link>
        <Link href="https://blog.morimorig3.com/">
          <a className="text-gray-100">
            <RiQuillPenFill size="1.5em" />
          </a>
        </Link>
      </header>

      <main className="pb-32">{children}</main>
      <Navi />
    </div>
  );
};

export default Layout;
