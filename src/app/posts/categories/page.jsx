import Link from 'next/link';
import { sql } from '@vercel/postgres';

export default async function PostCategories() {
    const categories = await sql`SELECT * FROM categories`;


  return (
    <div>
      <h1>P O S T  //  C A T E G O R I E S</h1>
      <ul>
        {games.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
