export class HeatMap {

    generate(damageArea: number): string {

        if (damageArea < 10) {
            return "Low";
        }

        if (damageArea < 20) {
            return "Moderate";
        }

        if (damageArea < 35) {
            return "High";
        }

        return "Critical";
    }

    color(level: string): string {

        switch (level) {

            case "Low":
                return "Green";

            case "Moderate":
                return "Yellow";

            case "High":
                return "Orange";

            default:
                return "Red";
        }

    }

}
