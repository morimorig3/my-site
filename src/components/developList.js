import developData from 'data/developData';
import Link from 'next/link';

const DevelopList = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {developData.map((develop) => (
        <div key={develop.url}>
          <Link href={develop.url}>
            <a target="_blank" rel="noreferrer">
              <figure className="grid place-items-center bg-green-500 h-40 rounded-lg mb-2">
                <develop.icon size="3em" className="text-gray-100" />
              </figure>
              <p className="font-bold">{develop.title}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DevelopList;
