import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ title, id, index }) => {
  const image = `https://images-na.ssl-images-amazon.com/images/P/${id}.09.LZZZZZZZ`;
  const link = `https://www.amazon.co.jp/dp/${id}`;
  return (
    <div>
      <Link href={`/books/${index ? index : ''}`}>
        <a className="hover:opacity-80 transition-opacity">
          <Image width="349" height="500" src={image} alt={title} />
        </a>
      </Link>
    </div>
  );
};

export default BookCard;
