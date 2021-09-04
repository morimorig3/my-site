import Link from 'next/link';
import BookCard from 'components/bookCard';

const BookList = ({ bookData, limit = 9999 }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {bookData
        .filter((book, index) => index < limit)
        .map(({ fields }) => (
          <div key={fields.id}>
            <Link href={`/books/${fields.id}`}>
              <a>
                <BookCard
                  src={`https:${fields.image.fields.file.url}`}
                  title={fields.title}
                  width={fields.image.fields.file.details.image.width}
                  height={fields.image.fields.file.details.image.height}
                />
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BookList;
