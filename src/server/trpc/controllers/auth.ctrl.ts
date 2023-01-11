import { create, getUserByEmail } from "../services/auth";
import { publicProcedure, protectedProcedure } from "../trpc";
import { createUserValidation } from "../validations/auth";

export const registerUser = publicProcedure
  .input(createUserValidation)
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
