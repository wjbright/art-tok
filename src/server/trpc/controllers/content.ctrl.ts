import uploadFileToCloudinary from "../../../utils/cloudinary";
import { getUserByEmail } from "../services/auth";
import { create } from "../services/content";

export const createContent = async (
  input: { caption: string; file: string },
  token: { email: string }
) => {
  try {
    const { email } = token;
    const user = await getUserByEmail(email);

    const uploadData = await uploadFileToCloudinary({
      file: input.file as string,
      userId: String(user?.id),
    });

    const { url } = uploadData;

    const contentData = {
      caption: input.caption,
      user_id: user?.id as number,
      url,
    };

    return await create(contentData);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
