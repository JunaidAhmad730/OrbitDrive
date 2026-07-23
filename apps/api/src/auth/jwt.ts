import jwt, { type Secret, type SignOptions } from "jsonwebtoken";

const ACCESS_SECRET: Secret = process.env.JWT_ACCESS_SECRET!;
const REFRESH_SECRET: Secret = process.env.JWT_REFRESH_SECRET!;

const accessTokenExpiresIn = (process.env.ACCESS_TOKEN_EXPIRES_IN ??
  "15m") as SignOptions["expiresIn"];

const refreshTokenExpiresIn = (process.env.REFRESH_TOKEN_EXPIRES_IN ??
  "7d") as SignOptions["expiresIn"];

export interface JwtPayload {
  userId: string;
}

export function generateAccessToken(payload: JwtPayload): string {
  return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: accessTokenExpiresIn,
  });
}

export function generateRefreshToken(payload: JwtPayload): string {
  return jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: refreshTokenExpiresIn,
  });
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, ACCESS_SECRET) as JwtPayload;
}

export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(token, REFRESH_SECRET) as JwtPayload;
}
