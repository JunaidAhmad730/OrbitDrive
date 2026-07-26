import { folderRepository } from "../repositories/folder.repository";

export class FolderService {
  async createFolder(data: {
    name: string;
    ownerId: string;
    parentId?: string | null;
  }) {
    const exists = await folderRepository.exists(
      data.name,
      data.ownerId,
      data.parentId
    );

    if (exists) {
      throw new Error("Folder already exists.");
    }

    return folderRepository.create(data);
  }

  async getFolder(id: string) {
    const folder = await folderRepository.findById(id);

    if (!folder) {
      throw new Error("Folder not found.");
    }

    return folder;
  }

  async getUserFolders(ownerId: string) {
    return folderRepository.findByOwner(ownerId);
  }

  async getChildren(parentId: string) {
    return folderRepository.findChildren(parentId);
  }

  async renameFolder(id: string, name: string) {
    const folder = await folderRepository.findById(id);

    if (!folder) {
      throw new Error("Folder not found.");
    }

    return folderRepository.rename(id, name);
  }

  
  async deleteFolder(id: string) {
    const folder = await folderRepository.findById(id);

    if (!folder) {
      throw new Error("Folder not found.");
    }

    await folderRepository.delete(id);

    return {
      success: true,
      message: "Folder deleted successfully.",
    };
  }
}

export const folderService = new FolderService();