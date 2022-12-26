import { fetchProfile } from "../services/feed";
import { publicProcedure } from "../trpc";
import { getFeedValidation } from "../validations/feed";

export const getFeed = publicProcedure
  .input(getFeedValidation)
  .query(async ({ ctx, input }) => {
    return await fetchProfile();
  });
