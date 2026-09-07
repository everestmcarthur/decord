// Module ID: 14007
// Function ID: 14008
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 14007 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-wgc-dirty-regions", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/WGCDirtyRegionsExperiment.tsx");

export const WGCDirtyRegionsExperiment = apexExperiment;
