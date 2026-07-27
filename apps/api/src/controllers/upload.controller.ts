import fs from "fs";
import path from "path";

import { Request, Response } from "express";

import { fileService } from "../services/file.service";

class UploadController {
  async upload(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded.",
        });
      }

      const ownerId = req.user!.userId;

      const folderId =
        typeof req.body.folderId === "string" && req.body.folderId.length > 0
          ? req.body.folderId
          : null;

      const extension = path.extname(req.file.originalname).replace(".", "");

      const file = await fileService.createFile({
        originalName: req.file.originalname,
        storageName: req.file.filename,
        mimeType: req.file.mimetype,
        extension,
        size: req.file.size,
        storagePath: req.file.path,
        ownerId,
        folderId,
      });

      return res.status(201).json({
        success: true,
        data: file,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Upload failed.",
      });
    }
  }

  async download(req: Request<{ id: string }>, res: Response) {
    try {
      const file = await fileService.getFile(req.params.id);

      const fullPath = path.resolve(file.storagePath);

      if (!fs.existsSync(fullPath)) {
        return res.status(404).json({
          success: false,
          message: "Physical file not found.",
        });
      }

      return res.download(fullPath, file.originalName);
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Download failed.",
      });
    }
  }
}

export const uploadController = new UploadController();