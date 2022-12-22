import { z } from "zod";

export const CREATE_USER_VALIDATION = z.object({
  name: z.string(),
  email: z.string(),
  profile_image: z.string(),
});
