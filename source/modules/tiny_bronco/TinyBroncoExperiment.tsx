// Module ID: 14739
// Function ID: 14740
// Name: TinyBroncoExperiment
// Dependencies: [1433, 14740, 2]
// Exports: isTinyBroncoEnabled, useIsTinyBroncoEnabled

// Module 14739 (TinyBroncoExperiment)
import TinyBroncoGate from "TinyBroncoGate" /* 14740 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-08-tiny-bronco", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoExperiment.tsx");

export const useIsTinyBroncoEnabled = function useIsTinyBroncoEnabled(location) {
  let enabled = TinyBroncoGate.TINY_BRONCO_DEV_ONLY;
  if (enabled) {
    const obj = { location };
    enabled = closure_2.useConfig(obj).enabled;
  }
  return enabled;
};
export const isTinyBroncoEnabled = function isTinyBroncoEnabled(location) {
  let enabled = TinyBroncoGate.TINY_BRONCO_DEV_ONLY;
  if (enabled) {
    const obj = { location };
    enabled = closure_2.getConfig(obj).enabled;
  }
  return enabled;
};
