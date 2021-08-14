import BookCard from 'components/bookCard';
import bookData from 'data/bookData';
import Link from 'next/link';

const BookList = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {bookData.map((book, index) => (
        <div key={book.id}>
          <Link href={`/books/${index}`}>
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
