import { Router } from "express";
import { folderController } from "../controllers/folder.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authenticate, folderController.create.bind(folderController));

router.get(
  "/:id",
  authenticate,
  folderController.getById.bind(folderController),
);

router.get(
  "/owner/:ownerId",
  authenticate,
  folderController.getByOwner.bind(folderController),
);

router.get(
  "/children/:parentId",
  authenticate,
  folderController.getChildren.bind(folderController),
);

router.patch(
  "/:id",
  authenticate,
  folderController.rename.bind(folderController),
);

router.delete(
  "/:id",
  authenticate,
  folderController.delete.bind(folderController),
);

export default router;
