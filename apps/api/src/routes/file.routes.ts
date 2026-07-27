import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";
import { fileController } from "../controllers/file.controller";

const router = Router();

router.post("/", authenticate, (req, res) => {
  void fileController.create(req, res);
});

router.get("/:id", authenticate, (req, res) => {
  void fileController.getById(req as any, res);
});

router.get("/owner/:ownerId", authenticate, (req, res) => {
  void fileController.getByOwner(req as any, res);
});

router.get("/folder/:folderId", authenticate, (req, res) => {
  void fileController.getByFolder(req as any, res);
});

router.delete("/:id", authenticate, (req, res) => {
  void fileController.delete(req as any, res);
});

export default router;
