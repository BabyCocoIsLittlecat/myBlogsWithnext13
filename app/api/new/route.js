import { connectToDB } from "@utils/database";
import Posts from "@models/posts";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const foundAllPosts = await Posts.find({}).populate("author");

    return new Response(JSON.stringify(foundAllPosts), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to fetch all posts", { status: 500 });
  }
};
