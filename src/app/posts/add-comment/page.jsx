import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddComment() {
  async function handleAddComment(formData) {
    "use server";

    const name = formData.get("name");
    const content = formData.get("content");

    await sql`INSERT INTO comments (commenter_name, content, game_id) values (${name}, ${content},${game_id})`;

    revalidatePath("/");

    redirect("/");
  }

  return (

    <div className="add-comment-container">
      <h2>Add a comment...</h2>
      <form action={handleAddComment}>
        <label htmlFor="commenter_name">Name: </label>
        <input name="commenter_name" id="commenter_name" placeholder="Name" required />
        <label htmlFor="content">Comment: </label>
        <input name="content" id="content" placeholder="Comment" required />
        <button type="submit">Submit comment</button>
      </form>
    </div>
  );
}