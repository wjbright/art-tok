import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileToCloudinary = async ({
  file,
  userId,
}: {
  file: string;
  userId?: string;
}) => {
  const response = await cloudinary.v2.uploader.upload_large(file, {
    folder: `user/${userId}/`,
  });
  return response;
};

export default uploadFileToCloudinary;
