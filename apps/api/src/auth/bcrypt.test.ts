import { comparePassword, hashPassword } from "./bcrypt";

async function test() {
  const password = "OrbitDrive@2026";

  const hashed = await hashPassword(password);

  console.log("Original Password:");
  console.log(password);

  console.log("\nHashed Password:");
  console.log(hashed);

  const match = await comparePassword(password, hashed);

  console.log("\nPassword Match:");
  console.log(match);
}

test().catch(console.error);
