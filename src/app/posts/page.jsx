"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function PostCategories() {
  const [games, setGames] = useState([]);
  const [sortOrder, setSortOrder] = useState('ASC');

  useEffect(() => {
    async function fetchGames() {
      const response = await fetch('/api/games');
      const data = await response.json();
      setGames(data);
    }

    fetchGames();
  }, [sortOrder]);

  const sortGames = (order) => {
    setSortOrder(order);
    setGames([...games].sort((a, b) => {
      if (order === 'ASC') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    }));
  };

  return (
    <div>
      <h1>P O S T S</h1>
      <nav className="category-button">
        <Link href="/posts/categories">C A T E G O R I E S</Link>
      </nav>
      <button onClick={() => sortGames('ASC')}>Sort Ascending</button>
      <button onClick={() => sortGames('DESC')}>Sort Descending</button>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
}
