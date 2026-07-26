import { Router } from "express";

import authRoutes from "./auth.routes";
import folderRoutes from "./folder.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/folders", folderRoutes);

export default router;