import { router } from "../trpc";
import { registerUser } from "../controllers/auth.ctrl";

export const authRouter = router({
  registerUser,
});
