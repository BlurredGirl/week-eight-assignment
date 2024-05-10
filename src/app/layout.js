import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar">
            <Link href="/">H O M E</Link>
            <Link href="/about">A B O U T</Link>
            <Link href="/posts">G A M E S</Link>
            <Link href="/posts/1">I N D I V I D U A L / G A M E</Link>
          </nav>
        </header>
        {children}
        <footer>
          <h2>Week Eight Assignment</h2>
        </footer>
      </body>
    </html>
  );
}
