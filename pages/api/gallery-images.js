import { getImageFileNames } from "@/app/utils";
import path from "path";
import sharp from "sharp";

export default async function handler(req, res) {
  const { folderPath } = req.query;
  const imagePath = path.join(process.cwd(), "public", folderPath);

  const imageFileNames = getImageFileNames(imagePath).filter(name => name !== ".DS_Store");
  const photoPromises = imageFileNames.map(async (fileName) => {
    const filePath = path.join(imagePath, fileName);
    const metadata = await sharp(filePath).metadata();
    return {
      src: path.join(folderPath, fileName)
    };
  });

  const photos = await Promise.all(photoPromises);
  res.status(200).json(photos);
}