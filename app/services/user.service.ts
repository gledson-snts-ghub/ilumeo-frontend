import { User } from "~/types/user";
import { ApiService } from "./api.service";

export class UserService {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async getAllUsers(): Promise<User[] | undefined> {
    return this.apiService.get<User[]>("/users");
  }

  async getUserById(id: string): Promise<User | undefined> {
    return this.apiService.get<User>(`/users/${id}`);
  }

  async createUser(user: { user_code: string }): Promise<User | undefined> {
    return this.apiService.post<User, typeof user>("/users", user);
  }
}
