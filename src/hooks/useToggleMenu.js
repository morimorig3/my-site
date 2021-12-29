import { useState } from 'react';

const useToggleMenu = (boolean) => {
  const [isMenuOpen, setIsMenuOpen] = useState(boolean);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return [isMenuOpen, toggleMenu];
};

export default useToggleMenu;
