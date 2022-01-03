import React from 'react';

export const NaviButton = React.forwardRef(
  ({ isActive, href, children }, ref) => (
    <a
      href={href}
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
