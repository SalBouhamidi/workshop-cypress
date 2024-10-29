import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Global upload function
export const uploadImage = async (imageData) => {
    try {
        console.log("Attempting to upload image to Cloudinary");
        const uploadResult = await cloudinary.uploader.upload(imageData, {
            folder: 'allo_media',
            use_filename: true,
            unique_filename: true,
        });
        console.log("Image uploaded successfully:", uploadResult.secure_url);
        return uploadResult.secure_url;
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        if (error.http_code) {
            console.error("Cloudinary HTTP error code:", error.http_code);
        }
        throw error;
    }
};

export const optimizeImage = (publicId, options = {}) => {
  return cloudinary.url(publicId, {
    fetch_format: "auto",
    quality: "auto",
    ...options,
  });
};
