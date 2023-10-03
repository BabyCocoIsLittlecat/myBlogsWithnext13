import mongoose from "mongoose";

let isConnented = false;

export const connectToDB = async () => {
  if (isConnented) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "blog_info",
    });

    isConnented = true;
  } catch (error) {
    console.log(error);
  }
};
