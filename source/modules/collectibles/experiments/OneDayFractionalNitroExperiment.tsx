// Module ID: 8875
// Function ID: 8876
// Name: apexExperiment
// Dependencies: [1433, 8876, 2]
// Exports: useOneDayFractionalNitroEnabled

// Module 8875 (apexExperiment)
import set from "set" /* 2 */;
import usePremiumGroupExperimentDefault from "usePremiumGroupExperiment" /* 8876 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-one-day-fractional-nitro", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = set.fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = function useOneDayFractionalNitroEnabled(product_card) {
  let obj = { location: product_card };
  obj = { location: product_card };
  const tmp = usePremiumGroupExperimentDefault(obj);
  return apexExperiment.useConfig(obj) && !usePremiumGroupExperimentDefault(obj);
};
