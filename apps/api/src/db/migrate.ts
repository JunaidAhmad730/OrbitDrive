import "dotenv/config";

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

async function runMigration() {
  const sql = postgres(process.env.DATABASE_URL!);

  const db = drizzle(sql);

  console.log("🚀 Running migrations...");

  await migrate(db, {
    migrationsFolder: "./drizzle",
  });

  console.log("✅ Migration completed successfully.");

  await sql.end();
}

runMigration().catch((error) => {
  console.error("❌ Migration failed.");
  console.error(error);
  process.exit(1);
});