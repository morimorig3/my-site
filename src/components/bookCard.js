import Image from 'next/image';

const BookCard = ({ title, src, width, height }) => (
  <Image src={src} width={width} height={height} alt={title} />
);
export default BookCard;
