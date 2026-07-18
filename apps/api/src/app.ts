import cors from "cors";
import express from "express";

import { API } from "./config/constants.js";
import { errorHandler } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";
import { logger } from "./utils/logger.js";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (_req, res) => {
  res.json({
    name: API.NAME,
    version: API.VERSION,
    documentation: "/api/v1",
  });
});

app.use("/api/v1", routes);

app.use(notFound);

app.use(errorHandler);

export default app;
