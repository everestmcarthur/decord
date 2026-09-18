// Module ID: 16124
// Function ID: 16125
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [4935, 5593, 7495, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 16124 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4935 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7495 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
};
