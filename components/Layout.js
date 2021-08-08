import Navi from './Navi';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const fontRighteous = {
  fontFamily: "'Righteous', cursive",
};

const Layout = ({ children }) => {
  //   const router = useRouter();
  //   const isRoot = router.pathname === '/';
  return (
    <div className="container mx-auto min-h-screen px-4">
      <Link href="/">
        <a
          style={fontRighteous}
          className="block text-center text-xl leading-none font-bold py-8 text-gray-100"
        >
          morimorig3.com
        </a>
      </Link>
      {children}
      <Navi />
      {/* {!isRoot && <Navi />} */}
    </div>
  );
};

export default Layout;
