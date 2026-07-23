import "dotenv/config";

import { authService } from "./auth.service";

async function test() {
  const telegramId = `tg_${Date.now()}`;

  const register = await authService.register({
    telegramId,
    username: "junaid",
    firstName: "Junaid",
    lastName: "Ahmad",
  });

  console.log("✅ Registered User");
  console.log(register.user);

  console.log("\nAccess Token:");
  console.log(register.accessToken);

  console.log("\nRefresh Token:");
  console.log(register.refreshToken);

  const login = await authService.login({
    telegramId,
  });

  console.log("\n✅ Login Successful");
  console.log(login.user);
}

test().catch(console.error);
