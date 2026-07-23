import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3).max(30),

  firstName: z.string().min(2).max(50),

  lastName: z.string().min(2).max(50).optional(),

  telegramId: z.string().min(1),
});

export const loginSchema = z.object({
  telegramId: z.string().min(1),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
