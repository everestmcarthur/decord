// Module ID: 10745
// Function ID: 10746
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 10745 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-premium-gifting-gogo-promotion", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/gifting/experiments/PremiumGiftingGogoPromotionExperiment.tsx");

export default apexExperiment;
export const PremiumGiftingGogoPromotionExperiment = apexExperiment;
