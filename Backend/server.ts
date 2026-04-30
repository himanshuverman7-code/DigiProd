import { createServer } from "http";
import app from "./src/app.js";
import { config } from "./src/configs/env.config.js";
import connectDB from "./src/configs/db.config.js";

const server = createServer(app);

const run = async () => {
  await connectDB();
  server.listen(config.PORT, () => {
    console.log("Server is running on port:", config.PORT);
  });
};

run()
