import newsData from 'data/newsData';
const NewsList = () => (
  <ul>
    {newsData.map((news) => (
      <li key={news.title} className="mb-1">
        <div>{news.title}</div>
        <div className="text-gray-500 text-sm">{news.date}</div>
      </li>
    ))}
  </ul>
);
export default NewsList;
