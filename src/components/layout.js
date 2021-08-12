import Navi from 'components/navi';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <Link href="/">
        <a className="font-righteous block text-center text-xl leading-none font-bold py-8 text-gray-100">
          morimorig3.com
        </a>
      </Link>
      <main className="pb-32">{children}</main>
      <Navi />
    </div>
  );
};

export default Layout;
