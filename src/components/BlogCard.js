import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from 'lib/api';
import { FaListUl } from 'react-icons/fa';

const BlogCard = ({ title, publishDate, slug, category, categorySlug }) => (
  <li className="p-4 md:p-6 transition-colors border hover:border-transparent border-gray-200 rounded duration-200 hover:shadow-all">
    <section className="flex flex-col sm:flex-row gap-4">
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
        <p className="text-xs sm:text-base text-gray-400">
          {formatDate(publishDate)}
        </p>
        <h3 className="mb-4 sm:mb-auto text-sm sm:text-xl font-bold">
          <Link href={`/blog/post/${slug}`}>
            <a>{title}</a>
          </Link>
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 flex gap-1 items-center">
          <FaListUl />
          <Link href={`/blog/category/${categorySlug}`}>
            <a>{category}</a>
          </Link>
        </p>
      </div>
    </section>
  </li>
);

export default BlogCard;
