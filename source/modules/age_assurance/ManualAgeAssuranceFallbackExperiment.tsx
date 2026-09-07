// Module ID: 8436
// Function ID: 8437
// Name: isManualAgeAssuranceFallbackEnabled
// Dependencies: [8430, 1433, 8418, 2]
// Exports: isManualAgeAssuranceFallbackEnabled

// Module 8436 (isManualAgeAssuranceFallbackEnabled)
import parseMessageEmbedForProps from "parseMessageEmbedForProps" /* 8418 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8430 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

require = arg1;
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-manual-age-assurance-fallback", defaultConfig: { enabled: false }, variations: ApexExperiment });
const result = require("set").fileFinishedImporting("modules/age_assurance/ManualAgeAssuranceFallbackExperiment.tsx");

export const isManualAgeAssuranceFallbackEnabled = function isManualAgeAssuranceFallbackEnabled(isAgeVerificationMessageWithManualReviewCta) {
  let obj = parseMessageEmbedForProps;
  if (obj.isCurrentUserSuspended()) {
    let enabled = isManualReviewFallbackEnabled.getIsManualReviewFallbackEnabled();
  } else {
    obj = { location: null };
    obj[0] = isAgeVerificationMessageWithManualReviewCta;
    enabled = config.getConfig(obj).enabled;
  }
  return enabled;
};
