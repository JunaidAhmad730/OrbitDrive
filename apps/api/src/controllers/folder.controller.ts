import { Request, Response } from "express";
import { folderService } from "../services/folder.service";

class FolderController {
  async create(req: Request, res: Response) {
    try {
      const { name, ownerId, parentId } = req.body;

      const folder = await folderService.createFolder({
        name,
        ownerId,
        parentId,
      });

      return res.status(201).json({
        success: true,
        data: folder,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to create folder",
      });
    }
  }

  async getById(req: Request<{ id: string }>, res: Response) {
    try {
      const folder = await folderService.getFolder(req.params.id);

      return res.status(200).json({
        success: true,
        data: folder,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error instanceof Error ? error.message : "Folder not found",
      });
    }
  }

  async getByOwner(req: Request<{ ownerId: string }>, res: Response) {
    try {
      const folders = await folderService.getUserFolders(req.params.ownerId);

      return res.status(200).json({
        success: true,
        data: folders,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to fetch folders",
      });
    }
  }

  async getChildren(req: Request<{ parentId: string }>, res: Response) {
    try {
      const folders = await folderService.getChildren(req.params.parentId);

      return res.status(200).json({
        success: true,
        data: folders,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch child folders",
      });
    }
  }

  async rename(
    req: Request<{ id: string }, unknown, { name: string }>,
    res: Response,
  ) {
    try {
      const folder = await folderService.renameFolder(
        req.params.id,
        req.body.name,
      );

      return res.status(200).json({
        success: true,
        data: folder,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to rename folder",
      });
    }
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    try {
      const result = await folderService.deleteFolder(req.params.id);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to delete folder",
      });
    }
  }
}

export const folderController = new FolderController();
