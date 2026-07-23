import { eq } from "drizzle-orm";

import { db } from "../db";
import { users } from "../db/schema";

export class UserRepository {
  async findById(id: string) {
    const result = await db.select().from(users).where(eq(users.id, id));

    return result[0] ?? null;
  }

  async findByTelegramId(telegramId: string) {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.telegramId, telegramId));

    return result[0] ?? null;
  }

  async create(data: typeof users.$inferInsert) {
    const result = await db.insert(users).values(data).returning();

    return result[0];
  }

  async getAll() {
    return db.select().from(users);
  }
}

export const userRepository = new UserRepository();
