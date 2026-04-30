import express from "express";
import globalErrors from "./shared/middlewares/globalErrors.middleware.js";
import routes from "./routes/index.js";

const app = express();

app.use(express.json())

// Application Routes
app.use("/api", routes);

// Global Error Handler
app.use(globalErrors);

export default app;
