import Link from 'next/link';

const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center">
      <Link href="/">
        <a className="font-righteous block text-center text-xl leading-none font-bold text-gray-100">
          morimorig3.com
        </a>
      </Link>
    </header>
  );
};

export default Header;
