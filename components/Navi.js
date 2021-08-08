import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  IoHome,
  IoHomeOutline,
  IoPersonOutline,
  IoPerson,
  IoBookOutline,
  IoBook,
  IoConstructOutline,
  IoConstruct,
} from 'react-icons/io5';

const Navi = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <ul className="w-full fixed bottom-0 left-0 flex justify-around z-10 bg-blue-500">
      <li className="flex-1">
        <Link href="/">
          <a className="block p-4 text-gray-100">
            {path === '/' ? (
              <IoHome size="1.8em" className="mx-auto" />
            ) : (
              <IoHomeOutline size="1.8em" className="mx-auto" />
            )}{' '}
          </a>
        </Link>
      </li>
      <li className="flex-1">
        <Link href="/develop">
          <a className="block p-4 text-gray-100">
            {path === '/develop' ? (
              <IoConstruct size="1.8em" className="mx-auto" />
            ) : (
              <IoConstructOutline size="1.8em" className="mx-auto" />
            )}
          </a>
        </Link>
      </li>
      <li className="flex-1">
        <Link href="/books">
          <a className="block p-4 text-gray-100">
            {path === '/books' ? (
              <IoBook size="1.8em" className="mx-auto" />
            ) : (
              <IoBookOutline size="1.8em" className="mx-auto" />
            )}
          </a>
        </Link>
      </li>
      <li className="flex-1">
        <Link href="/about">
          <a className="block p-4 text-gray-100">
            {path === '/about' ? (
              <IoPerson size="1.8em" className="mx-auto" />
            ) : (
              <IoPersonOutline size="1.8em" className="mx-auto" />
            )}
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Navi;
