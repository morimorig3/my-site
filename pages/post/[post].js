const Post = ({ post }) => {
  console.log(post);
  return (
    <>
      <h1>POST（投稿）</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => `/post/${post.id}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  if (!Object.keys(post).length) {
    return {
      notFound: true,
    };
  }
  return { props: { post, notFound: false } };
};
export default Post;
