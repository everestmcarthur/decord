// Module ID: 13765
// Function ID: 13766
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 13765 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-02-content-classification-presence-filter", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/presence/ContentClassificationPresenceFilterExperiment.tsx");

export const ContentClassificationPresenceFilterExperiment = apexExperiment;
