import Link from "next/link";

const Posts = ({ albums }) => {
    console.log(albums);
  return (
    <section>
      <h2>Albums</h2>
      {albums.map((post) => (
        <Link key={post.id} href={`posts/${post.id}`}>
          <h4>{post.name}</h4>
          
        </Link>
      ))}
    </section>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch("https://62852cc03060bbd347460bff.mockapi.io/albums");
  const albums = await res.json();
  return {
    props: {
      albums,
    },
  };
};
