// Module ID: 10220
// Function ID: 10221
// Name: BugReporterExperiment
// Dependencies: [1433, 2]

// Module 10220 (BugReporterExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-01-bug-reporter", kind: "user", defaultConfig: { hasBugReporterAccess: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { hasBugReporterAccess: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
