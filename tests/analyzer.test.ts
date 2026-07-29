import { Analyzer } from "../src/analyzer";

describe("Analyzer", () => {

    const analyzer = new Analyzer();

    test("inspection returns report", () => {

        const report = analyzer.inspect({

            filename: "roof.jpg",

            width: 1920,

            height: 1080

        });

        expect(report.result.cracks)
            .toBeGreaterThanOrEqual(0);

        expect(report.result.missingTiles)
            .toBeGreaterThanOrEqual(0);

    });

    test("heat level exists", () => {

        const report = analyzer.inspect({

            filename: "roof.jpg",

            width: 3500,

            height: 2500

        });

        expect(report.result.heatLevel)
            .toBeDefined();

    });

});
