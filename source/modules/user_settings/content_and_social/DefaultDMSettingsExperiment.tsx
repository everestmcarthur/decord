// Module ID: 15912
// Function ID: 15913
// Name: DefaultDMSettingsExperiment
// Dependencies: [5437, 5438, 4787, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15912 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4787 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5437 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5438 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
