import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from 'lib/api';

const DevelopList = ({ developData }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {developData.map(({ fields }) => (
        <div key={fields.url}>
          <Link href={fields.url}>
            <a target="_blank" rel="noreferrer">
              <figure
                className={`grid place-items-center sm:h-40 rounded-lg mb-2 bg-gray-200`}
              >
                <Image
                  src={`https:${fields.image.fields.file.url}`}
                  alt={fields.title}
                  width={fields.image.fields.file.details.image.width}
                  height={fields.image.fields.file.details.image.height}
                />
              </figure>
              <p className="font-bold">{fields.title}</p>
              <p className="text-sm text-gray-500">{formatDate(fields.date)}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DevelopList;
