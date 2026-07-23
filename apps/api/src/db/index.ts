import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });

export async function testDatabaseConnection() {
  try {
    const client = await pool.connect();

    await client.query("SELECT NOW();");

    console.log("🟢 PostgreSQL Connected Successfully");

    client.release();
  } catch (error) {
    console.error("🔴 PostgreSQL Connection Failed");
    console.error(error);

    process.exit(1);
  }
}
