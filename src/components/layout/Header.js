import Navi from 'components/layout/Navi';
import Link from 'next/link';

const Header = () => {
  const logo = {
    width: 'calc(100% / 6)',
  };
  return (
    <header className="bg-blue-600">
      <div className="lg:container px-8 lg:px-0 h-14 mx-auto flex justify-between">
        <Link href="/">
          <a
            style={logo}
            className="self-center font-Rubik block text-xl font-light text-gray-100"
          >
            morimorig3.com
          </a>
        </Link>
        <Navi />
      </div>
    </header>
  );
};

export default Header;
