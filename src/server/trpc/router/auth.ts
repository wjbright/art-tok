import { router, publicProcedure, protectedProcedure } from "../trpc";
import { CREATE_USER_VALIDATION } from "../validations/auth";
import { registerUser } from "../controllers/auth.ctrl";

export const authRouter = router({
  registerUser: publicProcedure
    .input(CREATE_USER_VALIDATION)
    .mutation(async ({ input }) => registerUser(input)),
  getUser: protectedProcedure.query(async ({ ctx }) => {
    return {
      st: "Hii",
    };
  }),
});
