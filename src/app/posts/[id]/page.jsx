// export default function SinglePostPage({params}) {
//     console.log (params);
//     console.log("This is where the server is running");
//     return (
//     <div>
//         <h1>I N D I V I D U A L // P O S T S</h1>
//         <p>Here we could do a fetch to go and get the info for post with the ID of{" "}
//         {params.id}</p>
//     </div>
//     );
// }

// putting the [] in the folder name means you can put anything in the browser after the / and it will return this page // This is a dynamic route
"use client"
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Post() {
  const router = useRouter();
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Post comment to your API route
    await fetch('week-eight-assignment-jnqsqifgl-emmas-projects-95755929.vercel.app/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId: router.query.postId, comment }),
    });
    setComment('');
    router.reload(); // Refresh the page to show the new comment
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit">Submit Comment</button>
    </form>
  );
}
