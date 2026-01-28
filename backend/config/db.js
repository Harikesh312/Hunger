import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://HarikeshKumar:8294harikesh312@cluster0.ilrvzt6.mongodb.net/food-del")
    .then(() => console.log("DB Connected"));
};
