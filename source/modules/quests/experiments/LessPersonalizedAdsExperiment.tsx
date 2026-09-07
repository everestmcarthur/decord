// Module ID: 11287
// Function ID: 11288
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 11287 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-01-less-personalized-ads", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/quests/experiments/LessPersonalizedAdsExperiment.tsx");

export const LessPersonalizedAdsExperiment = apexExperiment;
