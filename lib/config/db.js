import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB already connected");
      return;
    }

    await mongoose.connect('mongodb+srv://blogsapp:blogsapp@cluster0.xhpqnj8.mongodb.net/blog-app?retryWrites=true&w=majority&appName=Cluster0');
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("Database connection failed");
  }
};
