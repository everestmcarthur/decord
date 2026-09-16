// Module ID: 8566
// Function ID: 8567
// Name: ManualAgeAssuranceFallbackExperiment
// Dependencies: [8560, 1434, 8548, 2]
// Exports: isManualAgeAssuranceFallbackEnabled

// Module 8566 (ManualAgeAssuranceFallbackExperiment)
import SafetyHubStore from "SafetyHubStore" /* 8560 */;

const require = fn;
const ApexExperiment = fn(1434);
let obj2 = { kind: "user", name: "2026-07-manual-age-assurance-fallback", defaultConfig: { enabled: false }, variations: null };
const obj3 = { 1: null };
obj3[1] = { enabled: true };
obj2.variations = obj3;
const config = ApexExperiment.createApexExperiment(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/ManualAgeAssuranceFallbackExperiment.tsx");

export const isManualAgeAssuranceFallbackEnabled = function isManualAgeAssuranceFallbackEnabled(isAgeVerificationMessageWithManualReviewCta) {
  if (obj.isCurrentUserSuspended()) {
    let enabled = SafetyHubStore.getIsManualReviewFallbackEnabled();
  } else {
    const obj2 = { location: isAgeVerificationMessageWithManualReviewCta };
    enabled = config.getConfig(obj2).enabled;
  }
  return enabled;
};
