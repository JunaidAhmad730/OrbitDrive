import { Request, Response } from "express";
import { fileService } from "../services/file.service";

class FileController {
  async create(req: Request, res: Response) {
    try {
      const ownerId = req.user!.userId;

      const {
        originalName,
        storageName,
        mimeType,
        extension,
        size,
        storagePath,
        folderId,
      } = req.body;

      const file = await fileService.createFile({
        originalName,
        storageName,
        mimeType,
        extension,
        size,
        storagePath,
        ownerId,
        folderId,
      });

      return res.status(201).json({
        success: true,
        data: file,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to create file.",
      });
    }
  }

  async getById(req: Request<{ id: string }>, res: Response) {
    try {
      const file = await fileService.getFile(req.params.id);

      return res.status(200).json({
        success: true,
        data: file,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error instanceof Error ? error.message : "File not found.",
      });
    }
  }

  async getByOwner(req: Request<{ ownerId: string }>, res: Response) {
    try {
      const files = await fileService.getUserFiles(req.params.ownerId);

      return res.status(200).json({
        success: true,
        data: files,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to fetch files.",
      });
    }
  }

  async getByFolder(req: Request<{ folderId: string }>, res: Response) {
    try {
      const files = await fileService.getFolderFiles(req.params.folderId);

      return res.status(200).json({
        success: true,
        data: files,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to fetch files.",
      });
    }
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    try {
      const result = await fileService.deleteFile(req.params.id);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to delete file.",
      });
    }
  }
}

export const fileController = new FileController();
