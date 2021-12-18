import Link from 'next/link';
import NaviButton from 'components/layout/NaviButton';
import { useRouter } from 'next/router';

const Navi = () => {
  const { pathname } = useRouter();

  return (
    <>
      <nav className="flex text-gray-100">
        <Link href="/develop" passHref>
          <NaviButton isActive={/^\/develop/.test(pathname)}>制作物</NaviButton>
        </Link>
        {/* <Link href="/blog" passHref>
          <NaviButton isActive={/^\/blog/.test(pathname)}>ブログ</NaviButton>
        </Link> */}
        <Link href="/about" passHref>
          <NaviButton isActive={/^\/about/.test(pathname)}>
            私について
          </NaviButton>
        </Link>
      </nav>
    </>
  );
};

export default Navi;
