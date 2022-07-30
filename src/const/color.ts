import { teal, grey, lightGreen } from '@mui/material/colors';

export const COLORS = {
  WHITE: '#FFFFFF',
  TRANSPARENT: 'transparent',
  TEAL_900: teal[900],
  GREY_900: grey[900],
  GREY_600: grey[600],
  GREY_300: grey[300],
  GREY_50: grey[50],
  LIGHT_GREEN_A400: lightGreen['A400'],
};

export const TEXT_COLORS = {
  white: COLORS.WHITE,
  black: COLORS.GREY_900,
  grey: COLORS.GREY_600,
  lightGreen: COLORS.LIGHT_GREEN_A400,
};

export const BACKGROUND_COLORS = {
  transparent: COLORS.TRANSPARENT,
  green: COLORS.TEAL_900,
  grey: COLORS.GREY_50,
  lightGreen: COLORS.LIGHT_GREEN_A400,
  black: COLORS.GREY_900,
};

export const BORDER_COLORS = {
  grey: COLORS.GREY_300,
};

export const VENDOR_COLORS = {
  TWITTER: '#55acee',
  GITHUB: '#24292e',
  QIITA: '#55c500',
  JAVASCRIPT: 'rgba(236,216,77,1)',
  TYPESCRIPT: 'rgba(63,116,186,1)',
  REACT: 'rgba(128,216,247,1)',
  HTML: 'rgba(225,109,60,1)',
  CSS: 'rgba(82,150,240,1)',
  NODE: 'rgba(143,196,72,1)',
  SASS: 'rgba(179,100,139,1)',
};
