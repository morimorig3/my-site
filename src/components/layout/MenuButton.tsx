import { useState } from 'react';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { Box, Stack } from '@mui/material';
import { BACKGROUND_COLORS } from '@/const/color';

type Props = {
  toggleMenu: () => void;
};

export const MenuButton = ({ toggleMenu }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
    toggleMenu();
  };
  return (
    <Box
      onClick={toggleButton}
      role="button"
      sx={{
        display: {
          xs: 'block',
          md: 'none',
        },
        position: 'fixed',
        bottom: '56px',
        right: '20px',
        width: '64px',
        height: '64px',
        borderRadius: '100vh',
        bgcolor: BACKGROUND_COLORS.black,
        zIndex: 50,
        boxShadow: '0 3px 10px 1px rgba(0,0,0,0.1)',
      }}
    >
      <Stack
        direction="column"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Box
          sx={{
            transitionProperty: 'transform',
            transitionDuration: '150ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            ...(isOpen && { transform: 'translateY(16px)' }),
          }}
        >
          <MdOutlineKeyboardArrowUp
            size="1.6em"
            color={BACKGROUND_COLORS.grey}
          />
        </Box>
        <Box
          sx={{
            transitionProperty: 'transform',
            transitionDuration: '150ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            ...(isOpen && { transform: 'translateY(-16px)' }),
          }}
        >
          <MdOutlineKeyboardArrowDown
            size="1.6em"
            color={BACKGROUND_COLORS.grey}
          />
        </Box>
      </Stack>
    </Box>
  );
};
