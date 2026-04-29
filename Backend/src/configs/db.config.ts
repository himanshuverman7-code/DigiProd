import mongoose from "mongoose";
import { config } from "./env.config.js";

const connectDB = () => {
  mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log("Connected to Database"))
    .catch((err) => {
      throw new Error("Error Connecting Database");
    });
};


export default connectDB