export default function SinglePostPage({params}) {
    console.log (params);
    console.log("This is where the server is running");
    return (
    <div>
        <h1>I N D I V I D U A L // P O S T S</h1>
        <p>Here we could do a fetch to go and get the info for post with the ID of{" "}
        {params.id}</p>
    </div>
    );
}

