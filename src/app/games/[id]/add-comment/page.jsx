import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddComment({ params }) {
  async function handleAddComment(formData) {
    "use server";

    const name = formData.get("commenter_name");
    const content = formData.get("content");


    const {rows} = await sql`INSERT INTO comments (commenter_name, content, game_id) values (${name}, ${content}, ${params.id}) RETURNING *`;
    console.log (rows)

    revalidatePath("/");
    redirect (`/games/${params.id}`)
  }

  return (

    <div className="add-comment-container">
      <h1>C O M M E N T</h1>
      <form action={handleAddComment}>
        <label htmlFor="commenter_name">Name: </label>
        <input name="commenter_name" id="commenter_name" placeholder="Name" required />
        <label htmlFor="content">Comment: </label>
        <input name="content" id="content" placeholder="Comment" required />
        <button type="submit">S U B M I T</button>
      </form>
    </div>
  );
}
