import type { VFC } from 'react';

import Link from 'next/link';
import { FaListUl } from 'react-icons/fa';

import { formatDate } from '@/lib/utils';

type Props = {
  title: string;
  publishDate: string;
  categories: any;
};

export const PostHeader: VFC<Props> = ({ title, publishDate, categories }) => (
  <header>
    <p className="text-base text-gray-400 mb-2">{formatDate(publishDate)}</p>
    <h1 className="font-bold text-xl sm:text-3xl text-slate-800 leading-normal mb-2">
      {title}
    </h1>
    <ul className="flex gap-2">
      {categories.map(
        ({ name: categoryName, slug: categorySlug, sys: { id } }) => (
          <li
            key={id}
            className="text-sm sm:text-base text-gray-400 hover:text-slate-800 flex gap-1 items-center"
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
