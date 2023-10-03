import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Email already exists"],
  },
  image: { type: String },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email already exists"],
  },
});

const User = models.User || model("User", userSchema);

export default User;
