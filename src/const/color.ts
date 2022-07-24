import { teal, grey, lightGreen } from '@mui/material/colors';

export const COLORS = {
  WHITE: '#FFFFFF',
  TRANSPARENT: 'transparent',
  TEAL_900: teal[900],
  GREY_900: grey[900],
  GREY_400: grey[400],
  GREY_50: grey[50],
  LIGHT_GREEN_A400: lightGreen['A400'],
};

export const TEXT_COLORS = {
  white: COLORS.WHITE,
  black: COLORS.GREY_900,
  grey: COLORS.GREY_400,
  lightGreen: COLORS.LIGHT_GREEN_A400,
};

export const BACKGROUND_COLORS = {
  transparent: COLORS.TRANSPARENT,
  green: COLORS.TEAL_900,
  grey: COLORS.GREY_50,
  lightGreen: COLORS.LIGHT_GREEN_A400,
  black: COLORS.GREY_900,
};
