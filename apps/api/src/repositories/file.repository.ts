import { eq } from "drizzle-orm";

import { db } from "../db";
import { files } from "../db/schema";

export class FileRepository {
  async create(data: typeof files.$inferInsert) {
    const result = await db.insert(files).values(data).returning();

    return result[0];
  }

  async findById(id: string) {
    const result = await db.select().from(files).where(eq(files.id, id));

    return result[0] ?? null;
  }

  async findByOwner(ownerId: string) {
    return db.select().from(files).where(eq(files.ownerId, ownerId));
  }

  async findByFolder(folderId: string) {
    return db.select().from(files).where(eq(files.folderId, folderId));
  }

  async delete(id: string) {
    const result = await db.delete(files).where(eq(files.id, id)).returning();

    return result[0] ?? null;
  }
}

export const fileRepository = new FileRepository();
