import BookCard from 'components/bookCard';
import booklist from 'data/bookData';

const BookList = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {booklist.map((book, index) => (
        <BookCard key={book.id} title={book.title} id={book.id} index={index} />
      ))}
    </div>
  );
};

export default BookList;
