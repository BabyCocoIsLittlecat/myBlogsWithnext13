import Posts from "@models/posts";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const response = await Posts.findById(params.postId);
    if (!response) return new Response("Post not found", { status: 404 });

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to fetch all posts", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { title, content } = await req.json();
  try {
    await connectToDB();
    const updatePostId = await Posts.findByIdAndUpdate(
      { _id: params.postId },
      { title, content }
    );

    await updatePostId.save();

    return new Response(JSON.stringify(updatePostId), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to update, Please try again!", { status: 404 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Posts.findByIdAndDelete({
      _id: params.postId,
    });

    return new Response("Post was deleted successfully", { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to delete this post!", { status: 500 });
  }
};
