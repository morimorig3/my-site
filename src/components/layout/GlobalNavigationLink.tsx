import React, { ReactNode } from 'react';
import { Link } from '@mui/material';
import { TEXT_COLORS, BACKGROUND_COLORS } from '@/const/color';

type Props = {
  isActive: boolean;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
};

export const GlobalNavigationLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({ isActive, children, href = '', onClick = () => undefined }, ref) => {
    const border = {
      borderBottomWidth: 4,
      borderColor: BACKGROUND_COLORS.lightGreen,
      color: TEXT_COLORS.lightGreen,
    };
    const borderStyle = (isActive && border) ?? {};
    return (
      <Link
        href={href}
        onClick={onClick}
        ref={ref}
        color={TEXT_COLORS.white}
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          px: {
            xs: 1,
            md: 2,
          },
          ...borderStyle,
        }}
      >
        {children}
      </Link>
    );
  }
);

GlobalNavigationLink.displayName = 'GlobalNavigationLink';
