import { z } from "zod";

export const getFeedValidation = z.object({
  currentProfile: z.string().optional(),
  limit: z.number().min(1).max(100).nullish(),
  cursor: z.number().positive().nullish(),
});
export type GetFeedInterface = z.infer<typeof getFeedValidation>;
