import { useRouter } from 'next/router';

const Name = () => {
  const router = useRouter();
  console.log(router);

  return <h1>商品{router.query.name}ページ</h1>;
};

export default Name;
