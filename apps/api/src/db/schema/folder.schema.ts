import { pgTable, text, timestamp, foreignKey } from "drizzle-orm/pg-core";

import { users } from "./user.schema";

export const folders = pgTable(
  "folders",
  {
    id: text("id").primaryKey(),

    name: text("name").notNull(),

    parentId: text("parent_id"),

    ownerId: text("owner_id").notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),

    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => ({
    ownerFk: foreignKey({
      columns: [table.ownerId],
      foreignColumns: [users.id],
    }).onDelete("cascade"),
  }),
);
