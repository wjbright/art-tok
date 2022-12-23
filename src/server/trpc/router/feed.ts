import { router, publicProcedure } from "../trpc";
import { getFeedValidation } from "../validations/feed";
import { registerUser } from "../controllers/auth.ctrl";

export const feedRouter = router({
  getFeed: publicProcedure
    .input(getFeedValidation)
    .query(async ({ input }) => registerUser({ input })),
});
