import Link from 'next/link';
import { formatDate } from 'lib/api';
import { SiReact, SiTypescript } from 'react-icons/si';

const reactIcons = {
  React: SiReact,
  TypeScript: SiTypescript,
};

const Card = (data) => {
  const id = data.sys.id;
  const { title, summary, date, url, stacks } = data.fields;
  const icons = stacks.map((stackName) => ({
    title: stackName,
    Icon: reactIcons[stackName],
  }));
  return (
    <li key={id}>
      <a
        className="p-4 transition-colors border hover:border-transparent border-gray-200 rounded duration-200 hover:shadow-all flex flex-col gap-4 h-full"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-xs text-gray-600 mb-auto">{summary}</p>
        {icons.length && (
          <ul className="flex gap-2 text-gray-600">
            {icons.map(({ title, Icon }) => (
              <li key={title}>
                <Icon size="1.2em" />
              </li>
            ))}
          </ul>
        )}
        <p className="text-xs text-gray-400">update: {formatDate(date)}</p>
      </a>
    </li>
  );
};

export default Card;
