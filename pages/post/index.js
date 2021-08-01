import Link from 'next/link';
const index = ({ posts }) => {
  return (
    <>
      <h1>POST一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
};

export default index;
