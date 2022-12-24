import { create, getUserByEmail } from "../services/auth";
import { CreateUserInterface } from "../validations/auth";

export const registerUser = async ({
  input,
}: {
  input: CreateUserInterface;
}) => {
  const existingUser = await getUserByEmail(input);
  if (existingUser) {
    return existingUser;
  }
  return await create(input);
};
