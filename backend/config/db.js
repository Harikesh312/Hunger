import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("hello")
    .then(() => console.log("DB Connected"));
};
