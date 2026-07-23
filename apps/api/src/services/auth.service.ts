import { randomUUID } from "crypto";

import { generateAccessToken, generateRefreshToken } from "../auth/jwt";
import { userRepository } from "../repositories/user.repository";
import type { LoginInput, RegisterInput } from "../validators/auth.validator";

export class AuthService {
  async register(data: RegisterInput) {
    const existingUser = await userRepository.findByTelegramId(data.telegramId);

    if (existingUser) {
      throw new Error("User already exists.");
    }

    const user = await userRepository.create({
      id: randomUUID(),
      telegramId: data.telegramId,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    const accessToken = generateAccessToken({
      userId: user.id,
    });

    const refreshToken = generateRefreshToken({
      userId: user.id,
    });

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  async login(data: LoginInput) {
    const user = await userRepository.findByTelegramId(data.telegramId);

    if (!user) {
      throw new Error("User not found.");
    }

    const accessToken = generateAccessToken({
      userId: user.id,
    });

    const refreshToken = generateRefreshToken({
      userId: user.id,
    });

    return {
      user,
      accessToken,
      refreshToken,
    };
  }
}

export const authService = new AuthService();
