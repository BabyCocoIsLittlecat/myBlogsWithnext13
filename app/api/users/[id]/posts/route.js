import Posts from "@models/posts";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const foundAllPostsByUserId = await Posts.find({
      author: params.id,
    }).populate("author");

    return new Response(JSON.stringify(foundAllPostsByUserId), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to get user's posts", { status: 500 });
  }
};
