import { ReactNode } from 'react';
import { SiQiita, SiTwitter, SiGithub } from 'react-icons/si';
import { URL } from './const';
import { Stack, Typography, Link as MuiLink } from '@mui/material';
import { AvatorG3 } from '../AvatorG3';
import { TEXT_COLORS, VENDOR_COLORS } from '@/const/color';

type Props = {
  children?: ReactNode;
};

export const Bio = ({ children }: Props) => (
  <Stack
    direction="column"
    spacing={0.2}
    alignItems="center"
    color={TEXT_COLORS.grey}
  >
    <AvatorG3 />
    <Typography variant="body2" component="h3">
      morimorig3
    </Typography>
    <Typography variant="body2">フロントエンドエンジニア</Typography>
    {children && (
      <Typography variant="body2" textAlign="center">
        {children}
      </Typography>
    )}
    <Stack direction="row" spacing={1} justifyContent="center">
      <MuiLink
        href={URL.GITHUB}
        target="_blank"
        sx={{
          color: 'inherit',
          '&:hover': { color: VENDOR_COLORS.GITHUB },
        }}
      >
        <SiGithub size="1.6em" />
      </MuiLink>
      <MuiLink
        href={URL.TWITTER}
        target="_blank"
        sx={{
          color: 'inherit',
          '&:hover': { color: VENDOR_COLORS.TWITTER },
        }}
      >
        <SiTwitter size="1.6em" />
      </MuiLink>
      <MuiLink
        href={URL.QIITA}
        target="_blank"
        sx={{
          color: 'inherit',
          '&:hover': { color: VENDOR_COLORS.QIITA },
        }}
      >
        <SiQiita size="1.6em" />
      </MuiLink>
    </Stack>
  </Stack>
);
