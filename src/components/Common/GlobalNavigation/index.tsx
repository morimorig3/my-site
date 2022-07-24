import Link from 'next/link';
import { Fragment } from 'react';
import { GlobalNavigationLink } from '@/components/Common/GlobalNavigationLink';
import { useRouter } from 'next/router';
import { Stack } from '@mui/material';
import { PAGE_NAMES } from '@/const';

export const GlobalNavigation = () => {
  const { pathname } = useRouter();

  return (
    <Fragment>
      <Stack direction="row">
        <Link href="/blog" passHref>
          <GlobalNavigationLink isActive={/^\/blog/.test(pathname)}>
            {PAGE_NAMES.BLOG}
          </GlobalNavigationLink>
        </Link>
        <Link href="/about" passHref>
          <GlobalNavigationLink isActive={/^\/about/.test(pathname)}>
            {PAGE_NAMES.ABOUT}
          </GlobalNavigationLink>
        </Link>
      </Stack>
    </Fragment>
  );
};
