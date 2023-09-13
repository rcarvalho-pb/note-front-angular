import { User } from "./user.model";

export interface LoginResponse {
  token: string,
  user: Partial<User>;
}