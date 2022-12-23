import uploadFileToCloudinary from "../../../utils/cloudinary";
import { getUserByEmail } from "../services/auth";
import { create } from "../services/content";
import { protectedProcedure } from "../trpc";
import { CONTENT_UPLOAD_VALIDATION } from "../validations/content";

export const createContent = protectedProcedure
  .input(CONTENT_UPLOAD_VALIDATION)
  .mutation(async ({ input, ctx }) => {
    try {
      const { token } = ctx;
      const { email } = token;
      const user = await getUserByEmail(email as string);

      const uploadData = await uploadFileToCloudinary({
        file: input.file,
        userId: user?.id,
      });

      const { url } = uploadData;

      const contentData = {
        caption: input.caption,
        user_id: user?.id as string,
        url,
        id: "",
      };

      return await create(contentData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
