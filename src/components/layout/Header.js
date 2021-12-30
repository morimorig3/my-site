import Link from 'next/link';
import Navi from '@/components/layout/Navi';
const Header = () => {
  const logo = {
    width: 'calc(100% / 6)',
  };
  return (
    <header className="bg-blue-600">
      <div className="max-w-5xl px-4 sm:px-8 lg:px-0 h-10 md:h-14 mx-auto flex justify-between">
        <Link href="/">
          <a
            style={logo}
            className="self-center font-Rubik block md:text-xl font-light text-gray-100"
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
