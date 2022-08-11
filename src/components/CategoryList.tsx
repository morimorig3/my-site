import type { VFC } from 'react';

import Link from 'next/link';
import { FaListUl } from 'react-icons/fa';

type Props = {
  categories: any,
};

export const CategoryList: VFC<Props> = ({ categories }) => (
  <>
    <h3 className="text-lg font-bold mb-3">カテゴリー</h3>
    <nav>
      {categories.length &&
        categories.map(
          ({
            name: categoryName,
            slug: categorySlug,
            sys: { id },
            ...category
          }) => {
            const total = category.linkedFrom.entryCollection.total;
            return (
              <Link
                key={id}
                href="/blog/category/[categorySlug]"
                as={`/blog/category/${categorySlug}`}
              >
                <a className="flex items-center gap-2 text-gray-400 hover:text-slate-800 text-lg mb-2">
                  <FaListUl />
                  {`${categoryName}(${total})`}
                </a>
              </Link>
            );
          }
        )}
    </nav>
  </>
);
