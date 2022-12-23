import { router } from "../trpc";
import { createContent } from "../controllers/content.ctrl";

export const contentRouter = router({
  createContent,
});
