import { router, publicProcedure } from "../trpc";
import { getFeed } from "../controllers/feed.ctrl";

export const feedRouter = router({
  getFeed,
});
