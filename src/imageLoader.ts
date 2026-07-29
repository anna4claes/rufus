import * as fs from "fs";
import { RoofImage } from "./models";

export class ImageLoader {

    load(path: string): RoofImage {

        if (!fs.existsSync(path)) {
            throw new Error("Image not found.");
        }

        return {

            filename: path,

            width: 1920,

            height: 1080

        };
    }

    exists(path: string): boolean {

        return fs.existsSync(path);

    }

}
