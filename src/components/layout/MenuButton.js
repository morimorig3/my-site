import { useState } from 'react';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';

const MenuButton = ({ toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
    toggleMenu();
  };
  return isOpen ? (
    <div
      onClick={toggleButton}
      role="button"
      className="block md:hidden fixed bottom-14 right-5 w-16 h-16 rounded-full bg-slate-800 shadow-md shadow-gray-400"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <MdOutlineKeyboardArrowUp
          size="1.6em"
          className="text-gray-400 transition-transform translate-y-4"
        />
        <MdOutlineKeyboardArrowDown
          size="1.6em"
          className="text-gray-400 transition-transform -translate-y-4"
        />
      </div>
    </div>
  ) : (
    <div
      onClick={toggleButton}
      role="button"
      className="block md:hidden fixed bottom-14 right-5 w-16 h-16 rounded-full bg-slate-800 shadow-md shadow-gray-400"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <MdOutlineKeyboardArrowUp
          size="1.6em"
          className="text-gray-400 transition-transform"
        />
        <MdOutlineKeyboardArrowDown
          size="1.6em"
          className="text-gray-400 transition-transform"
        />
      </div>
    </div>
  );
};

export default MenuButton;
