import { Breakpoint, Container, SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { BACKGROUND_COLORS } from '@/const/color';
import { BACKGROUND_COLOR_TYPES } from '@/types/colors';

type Props = {
  children: ReactNode;
  bgColor?: BACKGROUND_COLOR_TYPES;
  sx?: SxProps;
  maxWidth?: Breakpoint;
};

export const SectionContainer = ({
  children,
  bgColor = 'transparent',
  sx,
  maxWidth,
}: Props) => {
  const backgroundColor = BACKGROUND_COLORS[bgColor];
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        bgcolor: backgroundColor,
      }}
    >
      <Container
        maxWidth={maxWidth}
        component="section"
        sx={{
          py: { xs: 5, md: 10 },
          ...sx,
        }}
      >
        {children}
      </Container>
    </Container>
  );
};
