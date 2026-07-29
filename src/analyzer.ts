import { Detector } from "./detector";
import { HeatMap } from "./heatmap";
import { RoofImage, InspectionReport } from "./models";

export class Analyzer {

    private detector = new Detector();

    private heatmap = new HeatMap();

    inspect(image: RoofImage): InspectionReport {

        const damage = this.detector.detect(image);

        damage.heatLevel = this.heatmap.generate(
            damage.damagedArea
        );

        return {

            image: image.filename,

            timestamp: new Date(),

            result: damage

        };
    }

}
