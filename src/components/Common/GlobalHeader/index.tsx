import Link from 'next/link';
import { GlobalNavigation } from '@/components/Common/GlobalNavigation';
import { Container, Stack, Link as MuiLink } from '@mui/material';
import { BACKGROUND_COLORS, TEXT_COLORS } from '@/const/color';
import { SITE_TITLE } from '@/const';

export const GlobalHeader = () => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        bgcolor: BACKGROUND_COLORS.green,
      }}
    >
      <Stack
        component="header"
        direction="row"
        sx={{
          justifyContent: 'space-between',
          maxWidth: 1024,
          height: 56,
          mx: 'auto',
          px: {
            xs: 2,
            sm: 4,
            lg: 0,
          },
        }}
      >
        <Link href="/">
          <MuiLink
            color={TEXT_COLORS.white}
            underline="none"
            sx={{
              display: 'block',
              fontSize: '22px',
              alignSelf: 'center',
              cursor: 'pointer',
              fontWeight: 'light',
            }}
          >
            {SITE_TITLE}
          </MuiLink>
        </Link>
        <GlobalNavigation />
      </Stack>
    </Container>
  );
};
