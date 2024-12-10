import { UserService } from "../services/user.service";

const userService = new UserService();

export const getAllUsers = async () => {
  return await userService.getAllUsers();
};

export const getUserById = async (id: string) => {
  return await userService.getUserById(id);
};

export const createUser = async (user: { user_code: string }) => {
  return await userService.createUser(user);
};
