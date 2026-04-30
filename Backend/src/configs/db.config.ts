import mongoose from "mongoose";
import { config } from "./env.config.js";
import ApiError from "../shared/utils/ApiError.js";

const connectDB = () => {
  mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log("Connected to Database"))
    .catch((err) => {      
      throw new ApiError(500, "Error Connecting Database", err);
    });
};


export default connectDB