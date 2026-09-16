// Module ID: 16005
// Function ID: 16006
// Name: DefaultDMSettingsExperiment
// Dependencies: [5509, 5510, 4851, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16005 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4851 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5509 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5510 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
