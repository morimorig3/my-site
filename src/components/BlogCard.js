import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from 'lib/utils';
import { FaListUl } from 'react-icons/fa';

const BlogCard = ({ title, publishDate, slug, categories }) => (
  <li className="transition-colors border hover:border-transparent border-gray-200 rounded duration-200 hover:shadow-all">
    <Link href="/blog/post/[slug]" as={`/blog/post/${slug}`}>
      <a className="p-4 md:p-6 flex sm:items-center flex-col sm:flex-row gap-4">
        <figure className="w-full sm:w-48 flex-shrink-0">
          <Image
            src={`https://og-image.morimorig3.com/${encodeURIComponent(
              title
            )}.png?md=1&fontSize=75px`}
            alt={title}
            width="1200"
            height="630"
            layout="responsive"
          ></Image>
        </figure>
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">{formatDate(publishDate)}</p>
          <h3 className="text-slate-800 mb-4 text-base sm:text-lg font-bold">
            {title}
          </h3>
          <ul className="flex gap-3">
            {categories.map(
              ({ name: categoryName, slug: categorySlug, sys: { id } }) => (
                <li
                  key={id}
                  className="text-sm sm:text-base text-gray-400 hover:text-slate-800 flex gap-1 items-center"
                >
                  <FaListUl />
                  <object>
                    <Link
                      href="/blog/category/[categorySlug]"
                      as={`/blog/category/${categorySlug}`}
                    >
                      <a>{categoryName}</a>
                    </Link>
                  </object>
                </li>
              )
            )}
          </ul>
        </div>
      </a>
    </Link>
  </li>
);

export default BlogCard;
