export interface RoofImage {

    filename: string;

    width: number;

    height: number;

}

export interface DamageResult {

    cracks: number;

    missingTiles: number;

    damagedArea: number;

    heatLevel: string;

}

export interface InspectionReport {

    image: string;

    timestamp: Date;

    result: DamageResult;

}
