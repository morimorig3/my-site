import Link from 'next/link';
import { Stack, Link as MuiLink } from '@mui/material';
import { BACKGROUND_COLORS, TEXT_COLORS } from '@/const/color';
import { FONT_SIZE } from '@/const/size';

export const GlobalFooter = () => (
  <Stack component="footer">
    <Stack
      direction="row"
      spacing={1}
      sx={{
        justifyContent: 'center',
        fontSize: FONT_SIZE.sm,
      }}
    >
      <Link href="/privacy">プライバシーポリシー</Link>
      <MuiLink
        color={TEXT_COLORS.black}
        underline="none"
        href="https://forms.gle/zh6isNmxAAEhM2iR6"
        target="_blank"
        rel="noopener noreferrer"
      >
        お問い合わせ
      </MuiLink>
    </Stack>
    <Stack
      direction="row"
      sx={{
        justifyContent: 'center',
        bgcolor: BACKGROUND_COLORS.black,
        color: TEXT_COLORS.white,
        py: 0.5,
        fontSize: FONT_SIZE.sm,
      }}
    >
      ©{new Date().getFullYear()} morimorig3
    </Stack>
  </Stack>
);
