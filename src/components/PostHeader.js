import Link from 'next/link';
import { formatDate } from 'lib/api';
import { FaFolder } from 'react-icons/fa';

const PostHeader = ({ title, publishDate, categorySlug, categoryName }) => (
  <header>
    <p className="text-base text-gray-400 mb-2">{formatDate(publishDate)}</p>
    <h1 className="font-bold text-3xl text-slate-800 leading-normal">
      {title}
    </h1>
    <p className="text-base text-gray-400 flex gap-1 items-center">
      <FaFolder />
      <Link href={`/blog/category/${categorySlug}`}>
        <a className="">{categoryName}</a>
      </Link>
    </p>
  </header>
);
export default PostHeader;
