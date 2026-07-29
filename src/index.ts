import { Analyzer } from "./analyzer";
import { RoofImage } from "./models";

const image: RoofImage = {

    filename: "sample/roof.jpg",

    width: 1920,

    height: 1080

};

const analyzer = new Analyzer();

const report = analyzer.inspect(image);

console.log("====== Roof Damage Analyzer ======");

console.log(report);
