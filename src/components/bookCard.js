import Image from 'next/image';
const BookCard = ({ title, id }) => {
  const url = `https://images-na.ssl-images-amazon.com/images/P/${id}.09.LZZZZZZZ`;
  return (
    <div className="w-5/12 max-w-xs">
      <Image width="349" height="500" src={url} alt={title} />
    </div>
  );
};

export default BookCard;
