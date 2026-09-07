// Module ID: 10220
// Function ID: 10221
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 10220 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { hasBugReporterAccess: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-01-bug-reporter", kind: "user", defaultConfig: { hasBugReporterAccess: false }, variations: obj });
const result = set.fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
