import Image from 'next/image';

const BookCard = ({ title, src, width, height }) => {
  return (
    <figure>
      <Image src={src} width={width} height={height} alt={title} />
    </figure>
  );
};

export default BookCard;
