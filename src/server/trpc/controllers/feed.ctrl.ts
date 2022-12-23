import { create, getUserByEmail } from "../services/auth";
import { CreateUser } from "../validations/auth";

export const getFeed = async (input: CreateUser) => {
  const existingUser = await getUserByEmail(input);
  if (existingUser) {
    return existingUser;
  }
  return await create(input);
};
