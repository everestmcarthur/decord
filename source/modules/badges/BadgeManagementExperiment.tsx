// Module ID: 11292
// Function ID: 11293
// Name: BadgeManagementExperiment
// Dependencies: [1433, 2]
// Exports: useIsBadgeManagementEnabled

// Module 11292 (BadgeManagementExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-badge-management", kind: "user", defaultConfig: { enabled: false, tenureBadgeHideable: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, tenureBadgeHideable: true } };
obj2[2] = { enabled: true, tenureBadgeHideable: false };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/badges/BadgeManagementExperiment.tsx");

export default apexExperiment;
export const useIsBadgeManagementEnabled = function useIsBadgeManagementEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
