import { eq, and, isNull } from "drizzle-orm";
import { randomUUID } from "crypto";

import { db } from "../db";
import { folders } from "../db/schema";

export class FolderRepository {
  async create(data: {
    name: string;
    ownerId: string;
    parentId?: string | null;
  }) {
    const [folder] = await db
      .insert(folders)
      .values({
        id: randomUUID(),
        name: data.name,
        ownerId: data.ownerId,
        parentId: data.parentId ?? null,
      })
      .returning();

    return folder;
  }

  async findById(id: string) {
    const [folder] = await db.select().from(folders).where(eq(folders.id, id));

    return folder;
  }

  async findByOwner(ownerId: string) {
    return db.select().from(folders).where(eq(folders.ownerId, ownerId));
  }

  async findChildren(parentId: string) {
    return db.select().from(folders).where(eq(folders.parentId, parentId));
  }

  async rename(id: string, name: string) {
    const [folder] = await db
      .update(folders)
      .set({
        name,
        updatedAt: new Date(),
      })
      .where(eq(folders.id, id))
      .returning();

    return folder;
  }

  async delete(id: string) {
    await db.delete(folders).where(eq(folders.id, id));
  }

  async exists(
  name: string,
  ownerId: string,
  parentId?: string | null
) {
  const conditions = [
    eq(folders.name, name),
    eq(folders.ownerId, ownerId),
  ];

  if (parentId) {
    conditions.push(eq(folders.parentId, parentId));
  } else {
    conditions.push(isNull(folders.parentId));
  }

  const [folder] = await db
    .select()
    .from(folders)
    .where(and(...conditions));

  return !!folder;
  }
}

export const folderRepository = new FolderRepository();
