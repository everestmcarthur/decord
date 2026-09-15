// Module ID: 15985
// Function ID: 15986
// Name: DefaultDMSettingsExperiment
// Dependencies: [5508, 5509, 4852, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15985 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4852 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5508 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5509 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
