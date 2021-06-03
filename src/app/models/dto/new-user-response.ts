import { User } from "../User";

export class NewUserResponse {
  success: boolean;
  errors: string[];
  user: User;

  constructor(success: boolean, errors: string[], user: User) {
    this.success = success;
    this.errors = errors;
    this.user = user;
  }
}
