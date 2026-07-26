import { api } from "./client";

export async function telegramLogin(data: unknown) {
  const response = await api.post("/telegram/login", data);

  return response.data;
}
