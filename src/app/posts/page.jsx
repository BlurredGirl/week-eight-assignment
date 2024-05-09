import Link from "next/link";

export default function PostCategories() {
    return (
        <div>
            <h1>P O S T S</h1>
            <nav className="category-button">
            <Link href="/posts/categories">C A T E G O R I E S</Link>
            </nav>
        </div>
    )
}

//