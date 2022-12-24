import { create, getUserByEmail } from "../services/auth";
import { publicProcedure, protectedProcedure } from "../trpc";
import { CREATE_USER_VALIDATION } from "../validations/auth";

export const registerUser = publicProcedure
  .input(CREATE_USER_VALIDATION)
  .mutation(async ({ input }) => {
    try {
      const existingUser = await getUserByEmail(input.email);
      if (existingUser) {
        return existingUser;
      }
      return await create(input);
    } catch (error) {
      throw error;
    }
  });
