// Module ID: 12583
// Function ID: 12584
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [4851, 5509, 7409, 12584, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 12583 (useIsMessageRequestRestrictedViewer)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4851 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5509 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7409 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  const isExplicitlyVerifiedAdult = AgeVerificationUtils.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  let enabled = !isExplicitlyVerifiedAdult;
  if (!isExplicitlyVerifiedAdult) {
    enabled = isSettingTeenByDefault;
  }
  if (enabled) {
    enabled = obj3.useConfig(obj4).enabled;
  }
  return enabled;
};
