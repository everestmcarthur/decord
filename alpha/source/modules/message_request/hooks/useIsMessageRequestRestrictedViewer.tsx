// Module ID: 12692
// Function ID: 12693
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [4968, 5635, 7539, 12693, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 12692 (useIsMessageRequestRestrictedViewer)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4968 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5635 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7539 */;
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
