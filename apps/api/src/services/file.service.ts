import { randomUUID } from "crypto";

import { fileRepository } from "../repositories/file.repository";

export interface CreateFileInput {
  originalName: string;
  storageName: string;
  mimeType: string;
  extension: string;
  size: number;
  storagePath: string;
  ownerId: string;
  folderId?: string | null;
}

export class FileService {
  async createFile(data: CreateFileInput) {
    return fileRepository.create({
      id: randomUUID(),
      originalName: data.originalName,
      storageName: data.storageName,
      mimeType: data.mimeType,
      extension: data.extension,
      size: data.size,
      storagePath: data.storagePath,
      ownerId: data.ownerId,
      folderId: data.folderId ?? null,
    });
  }

  async getFile(id: string) {
    const file = await fileRepository.findById(id);

    if (!file) {
      throw new Error("File not found.");
    }

    return file;
  }

  async getUserFiles(ownerId: string) {
    return fileRepository.findByOwner(ownerId);
  }

  async getFolderFiles(folderId: string) {
    return fileRepository.findByFolder(folderId);
  }

  async deleteFile(id: string) {
    const file = await fileRepository.delete(id);

    if (!file) {
      throw new Error("File not found.");
    }

    return {
      success: true,
      message: "File deleted successfully.",
    };
  }
}

export const fileService = new FileService();
