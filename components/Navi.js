import Link from 'next/link';

const Navi = () => (
  <ul className="w-full fixed bottom-0 flex justify-between border-t-2 border-gray-400">
    <li className="flex-1 border-r-2 border-gray-400">
      <Link href="/">
        <a className="block text-xl p-4 text-center font-bold">Home</a>
      </Link>
    </li>
    <li className="flex-1 border-r-2 border-gray-400">
      <Link href="/develop">
        <a className="block text-xl p-4 text-center font-bold">Develop</a>
      </Link>
    </li>
    <li className="flex-1">
      <Link href="/about">
        <a className="block text-xl p-4 text-center font-bold">About</a>
      </Link>
    </li>
  </ul>
);

export default Navi;
