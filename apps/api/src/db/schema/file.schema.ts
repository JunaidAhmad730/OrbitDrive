import { pgTable, uuid, text, bigint, timestamp } from "drizzle-orm/pg-core";

import { folders } from "./folder.schema";
import { users } from "./user.schema";

export const files = pgTable("files", {
  id: uuid("id").primaryKey(),

  originalName: text("original_name").notNull(),

  storageName: text("storage_name").notNull(),

  mimeType: text("mime_type").notNull(),

  extension: text("extension").notNull(),

  size: bigint("size", {
    mode: "number",
  }).notNull(),

  storagePath: text("storage_path").notNull(),

  ownerId: text("owner_id")
    .references(() => users.id, {
      onDelete: "cascade",
    })
    .notNull(),

  folderId: uuid("folder_id").references(() => folders.id, {
    onDelete: "cascade",
  }),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
