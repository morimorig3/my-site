import Navi from 'components/Navi';
import Link from 'next/link';

const fontRighteous = {
  fontFamily: "'Righteous', cursive",
};

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <Link href="/">
        <a
          style={fontRighteous}
          className="block text-center text-xl leading-none font-bold py-8 text-gray-100"
        >
          morimorig3.com
        </a>
      </Link>
      <main className="pb-16">{children}</main>
      <Navi />
    </div>
  );
};

export default Layout;
