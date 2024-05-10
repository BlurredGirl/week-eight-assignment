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
      {/* <nav className="category-button">
        <Link href="/posts/categories">C A T E G O R I E S</Link>
      </nav> */}

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
            {/* <span className="game-category">{categories.name}</span> */}
          </li> // why do these have backticks and $ on the demo?
        ))}
      </ul>
    </div>
  );
}
