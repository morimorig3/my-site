import Link from 'next/link';
import { formatDate } from '@/lib/api';

const DevelopList = ({ developData }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {developData.map(({ fields }) => (
        <div key={fields.url}>
          <Link href={fields.url}>
            <a target="_blank" rel="noreferrer">
              <p className="font-bold">{fields.title}</p>
              <p className="text-gray-500">{fields.summary}</p>
              <p className="text-sm text-gray-500">{formatDate(fields.date)}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DevelopList;
