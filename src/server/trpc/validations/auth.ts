import { z } from "zod";

export const createUserValidation = z.object({
  name: z.string(),
  email: z.string(),
  profile_image: z.string(),
});
export type CreateUser = z.infer<typeof createUserValidation>;
