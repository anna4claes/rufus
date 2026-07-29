export class Utils {

    static percent(
        part: number,
        total: number
    ): number {

        if (total === 0) {
            return 0;
        }

        return Number(
            ((part / total) * 100).toFixed(1)
        );
    }

    static clamp(
        value: number,
        min: number,
        max: number
    ): number {

        return Math.min(
            Math.max(value, min),
            max
        );
    }

    static timestamp(): string {

        return new Date().toISOString();

    }

}
