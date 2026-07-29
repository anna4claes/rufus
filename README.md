# Roof Damage Analyzer

Roof Damage Analyzer is a TypeScript application that simulates automated roof inspection using photographs captured by unmanned aerial vehicles (UAVs).

The project analyzes roof images, estimates visible damage, identifies missing roof tiles, evaluates crack severity and generates a simple heat-level assessment for inspection reports.

## Features

- Roof image inspection
- Crack detection simulation
- Missing tile estimation
- Damage area calculation
- Heat-level assessment
- Modular TypeScript architecture
- Unit tests
- Easy extension for AI or computer vision models

## Project Structure

```
src/
tests/
docs/
sample/
```

## Example Output

```
Inspection Report

Image: sample/roof.jpg

Detected Cracks : 12

Missing Tiles : 8

Damaged Area : 33.6%

Heat Level : High
```

## Build

```bash
npm install
```

```bash
npm run build
```

```bash
npm start
```

## Future Improvements

- OpenCV integration
- TensorFlow image classification
- Object detection models
- Drone flight metadata support
- PDF inspection reports
- Geo-referenced damage maps
- Batch image processing
- REST API
- Web dashboard

## License

MIT
