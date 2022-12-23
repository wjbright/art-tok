import { router, publicProcedure, protectedProcedure } from "../trpc";
import { createUserValidation } from "../validations/auth";
import { registerUser } from "../controllers/auth.ctrl";

export const authRouter = router({
  registerUser: publicProcedure
    .input(createUserValidation)
    .mutation(async ({ input }) => registerUser({ input })),
  getUser: protectedProcedure.query(async ({ ctx }) => {
    return {
      st: "Hii",
    };
  }),
});
