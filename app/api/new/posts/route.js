import { connectToDB } from "@utils/database";
import Posts from "@models/posts";

export const POST = async (req) => {
  const { userId, title, content } = await req.json();

  try {
    await connectToDB();

    const newPost = new Posts({
      author: userId,
      title,
      content,
    });

    await newPost.save();

    return new Response(JSON.stringify(newPost), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to create a new post", { status: 500 });
  }
};
