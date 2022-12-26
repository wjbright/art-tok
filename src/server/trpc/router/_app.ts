import { router } from "../trpc";
import { authRouter } from "./auth";
import { feedRouter } from "./feed";
import { contentRouter } from "./content";

export const appRouter = router({
  auth: authRouter,
  feed: feedRouter,
  content: contentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
