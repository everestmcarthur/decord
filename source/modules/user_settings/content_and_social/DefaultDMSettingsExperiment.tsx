// Module ID: 15946
// Function ID: 15947
// Name: DefaultDMSettingsExperiment
// Dependencies: [5475, 5476, 4820, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15946 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4820 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5475 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5476 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
