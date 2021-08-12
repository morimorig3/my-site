// import useNaviToggle from '../hooks/use-NaviToggle';
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
  // const isScrolled = useNaviToggle();

  return (
    <nav>
      <ul className="gNav w-full fixed bottom-0 left-0 flex justify-around z-10 bg-blue-500">
        <li className="flex-1">
          <Link href="/">
            <a className="p-2 flex justify-center items-center h-full text-gray-100">
              {path === '/' ? (
                <IoHome size="1.6em" className="mx-auto" />
              ) : (
                <IoHomeOutline size="1.6em" className="mx-auto" />
              )}{' '}
            </a>
          </Link>
        </li>
        <li className="flex-1">
          <Link href="/develop">
            <a className="p-2 flex justify-center items-center h-full text-gray-100">
              {/^\/develop/.test(path) ? (
                <IoConstruct size="1.6em" className="mx-auto" />
              ) : (
                <IoConstructOutline size="1.6em" className="mx-auto" />
              )}
            </a>
          </Link>
        </li>
        <li className="flex-1">
          <Link href="/books">
            <a className="p-2 flex justify-center items-center h-full text-gray-100">
              {/^\/books/.test(path) ? (
                <IoBook size="1.6em" className="mx-auto" />
              ) : (
                <IoBookOutline size="1.6em" className="mx-auto" />
              )}
            </a>
          </Link>
        </li>
        <li className="flex-1">
          <Link href="/about">
            <a className="p-2 flex justify-center items-center h-full text-gray-100">
              {/^\/about/.test(path) ? (
                <IoPerson size="1.6em" className="mx-auto" />
              ) : (
                <IoPersonOutline size="1.6em" className="mx-auto" />
              )}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navi;
