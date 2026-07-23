import "dotenv/config";

import {
  generateAccessToken,
  verifyAccessToken,
} from "./jwt";

const token = generateAccessToken({
  userId: "orbitdrive-user-001",
});

console.log("Generated Token:\n");
console.log(token);

console.log("\nDecoded Payload:\n");
console.log(verifyAccessToken(token));