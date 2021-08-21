import { useRouter } from 'next/router';
import Link from 'next/link';
import BookCard from 'components/bookCard';
import bookData from 'data/bookData';
import { shuffle } from 'components/utility';

const BookList = () => {
  const router = useRouter();
  const SHOW = 9;
  const data =
    router.pathname === '/'
      ? shuffle(bookData).filter((book, index) => index < SHOW)
      : shuffle(bookData);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {data.map((book, index) => (
        <div key={book.id}>
          <Link href={`/books/${book.id}`}>
            <a>
              <BookCard title={book.title} id={book.id} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
