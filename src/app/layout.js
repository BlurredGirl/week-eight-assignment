import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
        <nav className="navbar">
      <Link href="/">H O M E</Link>
      <Link href ="/about">A B O U T</Link>
      <Link href ="/posts">P O S T S</Link>
      <Link href="/posts/1">P O S T // 1</Link>
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
