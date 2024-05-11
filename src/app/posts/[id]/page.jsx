export default async function SinglePostPage({ params }) {

    // const result = await fetch ({params.id});
    // const games = await result.json();

//     return (
//       <div>
//         <h2>Single post page</h2>
//         <p>
//           Here we could do a fetch to go and get the info for post with ID of{" "}
//           {params.id}
//         </p>
//       </div>
//     );
//   }

//   export default async function Post({ params }) {
    // const response = await fetch(
    //   `https://jsonplaceholder.typicode.com/posts/${params.id}`
    // );
    // const post = await response.json();
  
    return (
      <div>
        {/* <h2>{game.id}</h2> */}
        <h2>{game.title}</h2>
        <p>{game.content}</p>
      </div>
    );
  }