import { InspectionReport } from "./models";

export class ReportPrinter {

    print(report: InspectionReport): void {

        console.log("");

        console.log("Inspection Report");

        console.log("------------------------------");

        console.log(
            `Image: ${report.image}`
        );

        console.log(
            `Date: ${report.timestamp.toISOString()}`
        );

        console.log("");

        console.log(
            `Detected Cracks : ${report.result.cracks}`
        );

        console.log(
            `Missing Tiles   : ${report.result.missingTiles}`
        );

        console.log(
            `Damaged Area    : ${report.result.damagedArea}%`
        );

        console.log(
            `Heat Level      : ${report.result.heatLevel}`
        );
    }

}
