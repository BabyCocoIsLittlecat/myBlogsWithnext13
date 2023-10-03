import { Schema, model, models } from "mongoose";

const postsSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "title is required."],
  },
  content: {
    type: String,
    required: [true, "content is required."],
  },
});

const Posts = models.PostsSchema || model("PostsSchema", postsSchema);

export default Posts;
