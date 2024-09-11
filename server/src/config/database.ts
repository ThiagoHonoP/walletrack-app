import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.DATABASE_URI as string);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
