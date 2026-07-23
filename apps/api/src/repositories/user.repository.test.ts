import "dotenv/config";

import { randomUUID } from "crypto";

import { userRepository } from "./user.repository";

async function test() {
  const telegramId = `tg_${Date.now()}`;

  const createdUser = await userRepository.create({
    id: randomUUID(),
    telegramId,
    username: "junaid",
    firstName: "Junaid",
    lastName: "Ahmad",
  });

  console.log("Created User:");
  console.log(createdUser);

  const fetchedUser = await userRepository.findByTelegramId(telegramId);

  console.log("\nFetched User:");
  console.log(fetchedUser);

  const allUsers = await userRepository.getAll();

  console.log(`\nTotal Users: ${allUsers.length}`);
}

test().catch(console.error);
