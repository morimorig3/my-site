import { VFC } from 'react';
import { formatDate } from '@/lib/utils';
import {
  SiReact,
  SiTypescript,
  SiNetlify,
  SiNextdotjs,
  SiContentful,
  SiVercel,
  SiTailwindcss,
  SiChakraui,
} from 'react-icons/si';

const stackIconMap = {
  React: SiReact,
  TypeScript: SiTypescript,
  Netlify: SiNetlify,
  Nextjs: SiNextdotjs,
  Contentful: SiContentful,
  Vercel: SiVercel,
  tailwindcss: SiTailwindcss,
  chakra: SiChakraui,
} as const;

// export type Stacks = keyof typeof stackIconMap;

type Props = {
  title: string;
  summary: string;
  date: string;
  url: string;
  stacks: string[];
};

export const Card: VFC<Props> = ({ title, summary, date, url, stacks }) => {
  const icons = stacks.map((stackName) => ({
    title: stackName,
    Icon: stackIconMap[stackName],
  }));
  return (
    <li>
      <a
        className="p-4 transition-colors border hover:border-transparent border-gray-200 rounded duration-200 hover:shadow-all flex flex-col gap-4 h-full"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="text-sm text-slate-800 font-bold">{title}</h3>
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
