import { ReactNode } from 'react';
import { GlobalHeader } from '@/components/Common/GlobalHeader';
import { GlobalFooter } from '@/components/Common/GlobalFooter';
import { Container, Stack } from '@mui/material';

type Props = {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: Props) => (
  <Stack
    direction="column"
    sx={{
      minHeight: '100vh',
    }}
  >
    <GlobalHeader />
    <Container
      component="main"
      disableGutters
      sx={{
        flex: 1,
        overflowX: 'hidden',
      }}
    >
      {children}
    </Container>
    <GlobalFooter />
  </Stack>
);
