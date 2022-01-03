import { useState } from 'react';

export const useToggleMenu = (boolean) => {
  const [isMenuOpen, setIsMenuOpen] = useState(boolean);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return [isMenuOpen, toggleMenu];
};
