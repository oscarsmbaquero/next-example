const Post= ( { albumId }) => {

    return (

        <div>
            <h3>Album Detail</h3>
            <h2>{albumId.name}</h2>
            <p>{albumId.year}</p>
            
        </div>
    )


}
export default Post;

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(
      `https://62852cc03060bbd347460bff.mockapi.io/albums/${params.id}`
    );
    const albumId = await res.json();
    return {
      props: {
        albumId,
      },
    };
  };