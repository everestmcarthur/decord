// Module ID: 11526
// Function ID: 11527
// Name: BountiesVerticalScrollExperiment
// Dependencies: [1433, 2]
// Exports: shouldUseScrollIndicatorOverlay, useIsBountiesVerticalScrollExperimentActive, useIsBountiesVerticalScrollExperimentEnabled, useIsScrollIndicatorOverlayVariant

// Module 11526 (BountiesVerticalScrollExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-bounties-vertical-scroll", kind: "user", defaultConfig: { enabled: false, verticalScrollEnabled: false, scrollAffordanceVariant: "none", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0, ctaTimerMilliSeconds: 0 }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, verticalScrollEnabled: false, scrollAffordanceVariant: "none", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0, ctaTimerMilliSeconds: 0 }, 3: { enabled: true, verticalScrollEnabled: true, scrollAffordanceVariant: "none", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0, ctaTimerMilliSeconds: 0 }, 4: { enabled: true, verticalScrollEnabled: true, scrollAffordanceVariant: "indicator", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0, ctaTimerMilliSeconds: 0 }, 5: { enabled: true, verticalScrollEnabled: true, scrollAffordanceVariant: "auto", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0, ctaTimerMilliSeconds: 0 } };
obj2[5] = { enabled: true, verticalScrollEnabled: true, scrollAffordanceVariant: "peek", autoScrollLeadMs: 3000, autoScrollEndCardMs: 3000, peekFraction: 0.12, ctaTimerMilliSeconds: 0 };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesVerticalScrollExperiment.tsx");

export const BountiesVerticalScrollExperiment = apexExperiment;
export const useIsBountiesVerticalScrollExperimentEnabled = function useIsBountiesVerticalScrollExperimentEnabled(BountiesScrollEndCard) {
  return apexExperiment.useConfig({ location: BountiesScrollEndCard }).verticalScrollEnabled;
};
export const useIsBountiesVerticalScrollExperimentActive = function useIsBountiesVerticalScrollExperimentActive(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export function shouldUseScrollIndicatorOverlay(scrollAffordanceVariant) {
  let tmp = "indicator" === scrollAffordanceVariant;
  if (!tmp) {
    tmp = "peek" === scrollAffordanceVariant;
  }
  return tmp;
}
export const useIsScrollIndicatorOverlayVariant = function useIsScrollIndicatorOverlayVariant(location) {
  const scrollAffordanceVariant = apexExperiment.useConfig({ location }).scrollAffordanceVariant;
  let tmp = "indicator" === scrollAffordanceVariant;
  if (!tmp) {
    tmp = "peek" === scrollAffordanceVariant;
  }
  return tmp;
};
