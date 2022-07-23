import Link from 'next/link';
import { Fragment } from 'react';
import { GlobalNavigationLink } from '@/components/layout/GlobalNavigationLink';
import { useRouter } from 'next/router';
import { Stack } from '@mui/material';

export const GlobalNavigation = () => {
  const { pathname } = useRouter();

  return (
    <Fragment>
      <Stack direction="row">
        <Link href="/blog" passHref>
          <GlobalNavigationLink isActive={/^\/blog/.test(pathname)}>
            Blog
          </GlobalNavigationLink>
        </Link>
        <Link href="/about" passHref>
          <GlobalNavigationLink isActive={/^\/about/.test(pathname)}>
            About
          </GlobalNavigationLink>
        </Link>
      </Stack>
    </Fragment>
  );
};
