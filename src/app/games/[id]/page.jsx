import Link from "next/link";
import { sql, db } from "@vercel/postgres";

export default async function PostPage({ params }) {
  const gameid = params.id;

  const { rows: game } = await sql`SELECT * FROM games where id = ${gameid}`;
  const { rows: comments } =
    await db.query(`SELECT * FROM comments where game_id = ($1)`,[gameid] );

  return (
    <div>
      <h1>C O M M E N T S</h1>
      <span className="game-title">{game[0].title}</span>
      <span className="game-content">{game[0].content}</span>
      <Link href={`${game[0].id}/add-comment`}>Add a comment</Link>
      <ul className="game-list">
        {comments.map((comment) => (
          <li key={comment.id} className="game-item">
            <span className="game-title">{comment.commenter_name}</span>
            <span className="game-content">{comment.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
