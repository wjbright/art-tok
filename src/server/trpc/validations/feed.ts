import { z } from "zod";

export const getFeedValidation = z.object({
  currentProfile: z.string().optional(),
});
