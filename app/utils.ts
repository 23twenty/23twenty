import fs from 'fs';
import path from 'path';

export const getImageFileNames = (imagePath: string) => {
    return fs.readdirSync(imagePath); // Returns an array of file names
}