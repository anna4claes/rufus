import { RoofImage, DamageResult } from "./models";

export class Detector {

    detect(image: RoofImage): DamageResult {

        const imageArea = image.width * image.height;

        const cracks = this.detectCracks(imageArea);

        const missingTiles = this.detectMissingTiles(imageArea);

        const damagedArea = this.calculateDamage(
            cracks,
            missingTiles
        );

        return {

            cracks,

            missingTiles,

            damagedArea,

            heatLevel: "Unknown"

        };
    }

    private detectCracks(area: number): number {

        if (area > 3000000) {
            return 12;
        }

        if (area > 1500000) {
            return 7;
        }

        return 3;
    }

    private detectMissingTiles(area: number): number {

        if (area > 3000000) {
            return 8;
        }

        if (area > 1500000) {
            return 5;
        }

        return 2;
    }

    private calculateDamage(
        cracks: number,
        missingTiles: number
    ): number {

        return Number(
            (cracks * 1.4 + missingTiles * 2.1)
                .toFixed(1)
        );
    }

}
