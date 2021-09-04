import Link from 'next/link';
import { formatDate } from 'lib/api';

const NewsList = ({ newsData }) => {
  return (
    <ul>
      {newsData.map(({ fields }) => {
        return (
          <li key={fields.title} className="mb-1">
            {fields.url ? (
              <>
                <Link href={fields.url}>
                  <a>
                    <div>{fields.title}</div>
                  </a>
                </Link>
                <div className="text-gray-500 text-sm">
                  {formatDate(fields.date)}
                </div>
              </>
            ) : (
              <>
                <div>{fields.title}</div>
                <div className="text-gray-500 text-sm">
                  {formatDate(fields.date)}
                </div>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default NewsList;
