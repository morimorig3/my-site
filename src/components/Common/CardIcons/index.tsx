import { TEXT_COLORS } from '@/const/color';
import { Box, Stack } from '@mui/material';
import { STACK_ICON_MAP } from './const';
import { StackIconType } from './types';

type Props = {
  stacks: StackIconType[];
};

export const CardIcons = ({ stacks }: Props) => (
  <Stack component="ul" direction="row" spacing={1} color={TEXT_COLORS.grey}>
    {stacks.map((stack) => {
      const IconComponent = STACK_ICON_MAP[stack];
      return (
        <Box key={stack} component="li">
          <IconComponent size="1.2em" />
        </Box>
      );
    })}
  </Stack>
);
