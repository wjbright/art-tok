import { fetchProfile } from "../services/feed";
import { publicProcedure } from "../trpc";
import { getFeedValidation } from "../validations/feed";

export const getFeed = publicProcedure
  .input(getFeedValidation)
  .query(async ({ ctx, input }) => {
    try {
      return await fetchProfile();
    } catch (error) {
      throw error;
    }
  });
