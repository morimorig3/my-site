import { useState, useEffect } from 'react';
import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';

const BookCard = ({ title, id }) => {
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response =
        await `https://images-na.ssl-images-amazon.com/images/P/${id}.09.LZZZZZZZ`;
      setImage(response);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  //   const link = `https://www.amazon.co.jp/dp/${id}`;
  return (
    <figure>
      {isLoading ? (
        <ClipLoader color="#9CA3AF" />
      ) : (
        <Image width="349" height="500" src={image} alt={title} />
      )}
    </figure>
  );
};

export default BookCard;
