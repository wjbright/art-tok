import { User } from "../interfaces/auth";
import { create, getUserByEmail } from "../services/auth";

export const registerUser = async (input: User) => {
  try {
    const existingUser = await getUserByEmail(input);
    if (existingUser) {
      return existingUser;
    }
    return await create(input);
  } catch (error) {
    throw error;
  }
};
