import express from "express";
import globalErrors from "./shared/middlewares/globalErrors.js";
import routes from "./routes/index.js";

const app = express();

// Application Routes
app.use("/api", routes);

// Global Error Handler
app.use(globalErrors);

export default app;
