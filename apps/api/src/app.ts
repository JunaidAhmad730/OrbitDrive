import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import folderRoutes from "./routes/folder.routes";
import fileRoutes from "./routes/file.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "🚀 OrbitDrive API is running.",
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/folders", folderRoutes);

app.use("/api/files", fileRoutes);

export default app;
