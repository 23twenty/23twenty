import { getImageFileNames } from "@/app/utils";
import path from "path";
import {Photo, RowsPhotoAlbum} from "react-photo-album";
import "react-photo-album/rows.css";
import sharp from "sharp";
import React from "react";

// Fetch image dimensions on the server side
const fetchImageDimensions = async (imagePath: string, folderPath: string) => {
    const imageFileNames = getImageFileNames(imagePath).filter(fileName => fileName !== ".DS_Store");
    const photoPromises = imageFileNames.map(async (fileName) => {
        const filePath = path.join(imagePath, fileName);
        const metadata = await sharp(filePath).metadata();
        return {
            src: path.join(folderPath, fileName),
            width: metadata.width,
            height: metadata.height,
        };
    });

    return await Promise.all(photoPromises);
};

interface PhotoGalleryProps {
    folderPath: string;
    title: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = async ({title, folderPath}) => {
    const imagePath = path.join(process.cwd(), "public", folderPath);
    const photos = await fetchImageDimensions(imagePath, folderPath) as Photo[];

    return (
        <main className="single single-gallery">
            <div id="content" className="site-content">
                <div className="gallery">
                    <h1 className="entry-title center-relative center-text">{title}</h1>
                    <RowsPhotoAlbum photos={photos} />
                </div>
            </div>
        </main>
    );
};