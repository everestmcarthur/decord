// Module ID: 14063
// Function ID: 14064
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 14063 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-08-browser-hevc", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/BrowserHevcExperiment.tsx");

export default apexExperiment;
