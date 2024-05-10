"use client"
import { useEffect, useState } from 'react';

export default function PostCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>P O S T  //  C A T E G O R I E S</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
