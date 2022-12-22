import { router, protectedProcedure } from "../trpc";
import { CONTENT_UPLOAD_VALIDATION } from "../validations/content";
import { createContent } from "../controllers/content.ctrl";

export const contentRouter = router({
  createContent: protectedProcedure
    .input(CONTENT_UPLOAD_VALIDATION)
    .mutation(async ({ input, ctx }) => {
      const { token } = ctx;
      return createContent(input, token as { email: string });
    }),
});
