# Architecture

```
index.ts
    │
    ▼
analyzer.ts
    │
    ├───────────── detector.ts
    │
    ├───────────── heatmap.ts
    │
    ├───────────── report.ts
    │
    ├───────────── imageLoader.ts
    │
    ├───────────── models.ts
    │
    └───────────── utils.ts
```

## Modules

### Analyzer

Coordinates the inspection workflow.

### Detector

Detects roof cracks and missing roof tiles.

### HeatMap

Calculates a qualitative heat level from the detected damage.

### Report

Formats inspection results for output.

### ImageLoader

Loads and validates roof images.

### Models

Shared interfaces used across the application.

### Utils

Reusable helper methods.
