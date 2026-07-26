import express from "express";
import cors from "cors";

import routes from "./routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "🚀 OrbitDrive API is running.",
  });
});

app.use("/api", routes);

export default app;
