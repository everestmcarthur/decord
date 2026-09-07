// Module ID: 8864
// Function ID: 8865
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 8864 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-12-orb-redemption-thru-orders", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/virtual_currency/experiments/OrbRedemptionOrdersExperiment.tsx");

export default apexExperiment;
