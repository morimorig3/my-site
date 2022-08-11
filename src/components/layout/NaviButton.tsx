import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  isActive: boolean;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
};

export const NaviButton = React.forwardRef<HTMLAnchorElement, Props>(
  ({ isActive, children, href = '', onClick = () => undefined }, ref) => (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className={
        isActive
          ? 'border-b-4 border-yellow-400 text-yellow-400 flex items-center p-2 md:p-4 text-sm md:text-base'
          : 'flex items-center p-2 md:p-4 text-sm md:text-base'
      }
    >
      {children}
    </a>
  )
);
NaviButton.displayName = 'NaviButton';
