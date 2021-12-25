import { FaListUl } from 'react-icons/fa';

const CategoryHeader = ({ children, className = '' }) => (
  <header className={className}>
    <h2 className="font-bold text-2xl text-slate-800 flex gap-2 items-center">
      <FaListUl className="text-gray-400" />
      {children}
    </h2>
  </header>
);

export default CategoryHeader;
