import Link from 'next/link';
import { formatDate } from 'lib/utils';
import { FaListUl } from 'react-icons/fa';

const PostHeader = ({ title, publishDate, categories }) => (
  <header>
    <p className="text-base text-gray-400 mb-2">{formatDate(publishDate)}</p>
    <h1 className="font-bold text-3xl text-slate-800 leading-normal">
      {title}
    </h1>
    <ul className="flex gap-2">
      {categories.map(
        ({ name: categoryName, slug: categorySlug, sys: { id } }) => (
          <li
            key={id}
            className="text-xs sm:text-sm text-gray-400 flex gap-1 items-center"
          >
            <FaListUl />
            <Link href={`/blog/category/${categorySlug}`}>
              <a>{categoryName}</a>
            </Link>
          </li>
        )
      )}
    </ul>
  </header>
);
export default PostHeader;
