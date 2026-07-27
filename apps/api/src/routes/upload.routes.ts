import { Router } from "express";
import { Request } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { upload } from "../config/multer";
import { uploadController } from "../controllers/upload.controller";

const router = Router();

router.post("/", authenticate, upload.single("file"), (req, res) => {
  void uploadController.upload(req, res);
});

router.get("/:id", authenticate, (req, res) => {
  void uploadController.download(req as Request<{ id: string }>, res);
});

export default router;