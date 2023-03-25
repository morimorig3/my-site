import { VFC } from 'react';
import Link from 'next/link';
import { NaviButton } from '@/components/layout/NaviButton';
import { useRouter } from 'next/router';

export const Navi: VFC = () => {
  const { pathname } = useRouter();

  return (
    <>
      <nav className="flex text-gray-100">
        {/* <Link href="/develop" passHref>
          <NaviButton isActive={/^\/develop/.test(pathname)}>制作物</NaviButton>
        </Link> */}
        <Link href="https://blog.morimorig3.com/">
          <NaviButton isActive={false}>Blog</NaviButton>
        </Link>
        <Link href="/about" passHref>
          <NaviButton isActive={/^\/about/.test(pathname)}>About</NaviButton>
        </Link>
      </nav>
    </>
  );
};
