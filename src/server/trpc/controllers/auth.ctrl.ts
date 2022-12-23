import { create, getUserByEmail } from "../services/auth";
import { CreateUser } from "../validations/auth";

export const registerUser = async ({ input }: { input: CreateUser }) => {
  const existingUser = await getUserByEmail(input);
  if (existingUser) {
    return existingUser;
  }
  return await create(input);
};
