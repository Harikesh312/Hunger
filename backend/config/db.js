import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://HarikeshKumar:harikesh312@cluster0.zqtmtyu.mongodb.net/hunger")
    .then(() => console.log("DB Connected"));
};
