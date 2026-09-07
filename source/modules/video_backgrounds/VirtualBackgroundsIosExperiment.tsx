// Module ID: 9113
// Function ID: 9114
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 9113 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-virtual-backgrounds-ios", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/video_backgrounds/VirtualBackgroundsIosExperiment.tsx");

export default apexExperiment;
