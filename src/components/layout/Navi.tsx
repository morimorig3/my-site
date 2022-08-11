import type { VFC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { NaviButton } from '@/components/layout/NaviButton';

export const Navi: VFC = () => {
  const { pathname } = useRouter();

  return (
    <>
      <nav className="flex text-gray-100">
        {/* <Link href="/develop" passHref>
          <NaviButton isActive={/^\/develop/.test(pathname)}>制作物</NaviButton>
        </Link> */}
        <Link href="/blog" passHref>
          <NaviButton isActive={/^\/blog/.test(pathname)}>Blog</NaviButton>
        </Link>
        <Link href="/about" passHref>
          <NaviButton isActive={/^\/about/.test(pathname)}>About</NaviButton>
        </Link>
      </nav>
    </>
  );
};
