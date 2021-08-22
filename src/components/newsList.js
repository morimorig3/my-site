import newsData from 'data/newsData';
import Link from 'next/link';

const NewsList = () => (
  <ul>
    {newsData.map((news) => {
      return (
        <li key={news.title} className="mb-1">
          {news.url ? (
            <>
              <Link href={news.url}>
                <a>
                  <div>{news.title}</div>
                </a>
              </Link>
              <div className="text-gray-500 text-sm">{news.date}</div>
            </>
          ) : (
            <>
              <div>{news.title}</div>

              <div className="text-gray-500 text-sm">{news.date}</div>
            </>
          )}
        </li>
      );
    })}
  </ul>
);
export default NewsList;
