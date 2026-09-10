// Module ID: 15961
// Function ID: 15962
// Name: DefaultDMSettingsExperiment
// Dependencies: [5473, 5474, 4818, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15961 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4818 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5473 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5474 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
