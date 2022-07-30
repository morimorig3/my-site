import { formatDate } from '@/lib/utils';
import { Box, Link, Stack, Typography } from '@mui/material';
import { BORDER_COLORS, TEXT_COLORS } from '@/const/color';
import { BOX_SHADOW } from '@/const/style';
import { StackIconType } from './Common/CardIcons/types';
import { CardIcons } from './Common/CardIcons';
import { FONT_SIZE } from '@/const/size';

type Props = {
  title: string;
  summary: string;
  date: string;
  url: string;
  stacks: StackIconType[];
};

export const AppListCard = ({ title, summary, date, url, stacks }: Props) => {
  return (
    <Box component="li">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
      >
        <Stack
          direction="column"
          spacing={2}
          color={TEXT_COLORS.grey}
          sx={{
            height: '100%',
            p: 2,
            transition: '250ms',
            border: `1px solid ${BORDER_COLORS.grey}`,
            '&:hover': {
              borderColor: 'transparent',
              boxShadow: BOX_SHADOW,
            },
          }}
        >
          <Typography
            component="h3"
            fontWeight={700}
            color={TEXT_COLORS.black}
            fontSize={FONT_SIZE.md}
          >
            {title}
          </Typography>
          <Typography fontSize={FONT_SIZE.md} mb="auto">
            {summary}
          </Typography>
          <CardIcons stacks={stacks} />
          <Typography fontSize={FONT_SIZE.sm}>
            update: {formatDate(date)}
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
};
