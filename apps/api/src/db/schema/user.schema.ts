import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),

  telegramId: text("telegram_id").unique(),

  username: text("username"),

  firstName: text("first_name"),

  lastName: text("last_name"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});
