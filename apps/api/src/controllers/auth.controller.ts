import { Request, Response } from "express";

import { authService } from "../services/auth.service";

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const result = await authService.register(req.body);

      return res.status(201).json({
        success: true,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Registration failed.",
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const result = await authService.login(req.body);

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Login failed.",
      });
    }
  }

  async profile(req: Request, res: Response) {
    return res.status(200).json({
      success: true,
      user: req.user,
    });
  }
}

export const authController = new AuthController();