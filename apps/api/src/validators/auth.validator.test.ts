import { registerSchema } from "./auth.validator";

const result = registerSchema.safeParse({
  username: "junaid",
  firstName: "Junaid",
  lastName: "Ahmad",
  telegramId: "123456789",
});

console.log(result);
