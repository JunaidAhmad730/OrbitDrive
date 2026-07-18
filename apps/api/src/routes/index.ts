import { Router } from "express";
import { API } from "../config/constants.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    status: "ok",
    api: API.NAME,
    version: API.VERSION,
  });
});

router.get("/health", (_req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default router;