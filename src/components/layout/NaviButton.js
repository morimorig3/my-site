import React from 'react';

const NaviButton = React.forwardRef(({ isActive, href, children }, ref) => (
  <a
    href={href}
    ref={ref}
    className={
      isActive
        ? 'border-b-4 border-yellow-400 text-yellow-400 flex items-center p-4'
        : 'flex items-center p-4'
    }
  >
    {children}
  </a>
));
NaviButton.displayName = 'NaviButton';
export default NaviButton;
