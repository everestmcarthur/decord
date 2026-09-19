// Module ID: 16200
// Function ID: 16201
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [4968, 5635, 7539, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 16200 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4968 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7539 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
};
