import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../auth/jwt";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
      };
    }
  }
}

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;

console.log("Authorization Header:", authHeader);

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing.",
      });
    }

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization format.",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyAccessToken(token);

    req.user = {
      userId: decoded.userId,
    };

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
}