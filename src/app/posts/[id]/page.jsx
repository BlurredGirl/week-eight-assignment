// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function SinglePostPage() {
//   const [game, setGame] = useState(null);
//   const [comment, setComment] = useState('');
//   const router = useRouter();
//   const { id } = router.query;

//   useEffect(() => {
//     // Fetch the game details when the component mounts or when the id changes
//     async function fetchGameDetails() {
//       if (id) {
//         const response = await fetch(`/api/games/${id}`);
//         const data = await response.json();
//         setGame(data);
//       }
//     }

//     fetchGameDetails();
//   }, [id]);

//   const submitComment = async (e) => {
//     e.preventDefault(); // Prevent the form from refreshing the page

//     // Post the comment to the server
//     await fetch(`/api/games/${id}/comments`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ content: comment }),
//     });

//     // Clear the input field after submission and optionally refresh the comments list
//     setComment('');
//   };

//   if (!game) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>I N D I V I D U A L // P O S T S</h1>
//       <p>Here we could do a fetch to go and get the info for post with the ID of {id}</p>
//       <h2>{game.title}</h2>
//       <p>{game.content}</p>
//       {/* Add a form to submit comments */}
//       <form onSubmit={submitComment}>
//         <input
//           type="text"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Leave a comment"
//         />
//         <button type="submit">Submit Comment</button>
//       </form>
//     </div>
//   );
// }
