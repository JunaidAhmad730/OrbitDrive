import app from "./app";
import { ENV } from "./config/env";
import { testDatabaseConnection, db } from "./db";
import { users } from "./db/schema";

async function startServer() {
  await testDatabaseConnection();

  const existingUsers = await db.select().from(users);

  console.log(`📦 Users in database: ${existingUsers.length}`);

  app.listen(ENV.PORT, () => {
    console.log(`🚀 OrbitDrive API running on http://localhost:${ENV.PORT}`);
  });
}

startServer().catch((error) => {
  console.error(error);
  process.exit(1);
});
