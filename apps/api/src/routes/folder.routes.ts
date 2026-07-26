import { Router } from "express";
import { folderController } from "../controllers/folder.controller";

const router = Router();

router.post("/", (req, res) => folderController.create(req, res));

router.get("/:id", (req, res) => folderController.getById(req, res));

router.get("/owner/:ownerId", (req, res) =>
  folderController.getByOwner(req, res),
);

router.get("/children/:parentId", (req, res) =>
  folderController.getChildren(req, res),
);

router.patch("/:id", (req, res) => folderController.rename(req, res));

router.delete("/:id", (req, res) => folderController.delete(req, res));

export default router;
