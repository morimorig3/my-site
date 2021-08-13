import Image from 'next/image';

const BookCard = ({ title, id }) => {
  const image = `https://images-na.ssl-images-amazon.com/images/P/${id}.09.LZZZZZZZ`;
  //   const link = `https://www.amazon.co.jp/dp/${id}`;
  return (
    <figure>
      <Image width="349" height="500" src={image} alt={title} />
    </figure>
  );
};

export default BookCard;
