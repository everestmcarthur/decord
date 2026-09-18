// Module ID: 16123
// Function ID: 16124
// Name: DefaultDMSettingsExperiment
// Dependencies: [5593, 5594, 4935, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16123 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4935 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5593 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5594 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
