import Link from "next/link";
import { sql } from "@vercel/postgres";

export default async function PostListPage({ searchParams }) {
  // const response?
  const games = await sql`SELECT * FROM games`;

  if (searchParams.sort === "desc") {
    games.rows.reverse();
  }

  return (
    <div>
      <h1>G A M E S</h1>
      <Link className="ascending" href="/posts?sort=asc">
        Sort Ascending
      </Link>
      <Link className="descending" href="/posts?sort=desc">
        Sort Descending
      </Link>

      <ul className="game-list">
        {games.rows.map((game) => (
          <li key={game.id} className="game-item">
            <span className="game-title">{game.title}</span>
            <span className="game-content">{game.content}</span>
                      </li> 
        ))}
      </ul>
    </div>
  );
}
