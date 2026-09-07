// Module ID: 14008
// Function ID: 14009
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 14008 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-wgc-dirty-regions-all", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/WGCDirtyRegionsAllExperiment.tsx");

export const WGCDirtyRegionsAllExperiment = apexExperiment;
