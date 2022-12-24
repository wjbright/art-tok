import { z } from "zod";

export const CONTENT_UPLOAD_VALIDATION = z.object({
  caption: z.string(),
  file: z.string(),
});
