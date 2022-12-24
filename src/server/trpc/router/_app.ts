import { router } from "../trpc";
import { authRouter } from "./auth";
import { feedRouter } from "./feed";

export const appRouter = router({
  auth: authRouter,
  feed: feedRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
