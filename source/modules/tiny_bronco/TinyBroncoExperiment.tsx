// Module ID: 14805
// Function ID: 14806
// Name: TinyBroncoExperiment
// Dependencies: [1434, 14806, 2]
// Exports: isTinyBroncoEnabled, useIsTinyBroncoEnabled

// Module 14805 (TinyBroncoExperiment)
import TinyBroncoGate from "TinyBroncoGate" /* 14806 */;
import ApexExperiment from "ApexExperiment" /* 1434 */;
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
