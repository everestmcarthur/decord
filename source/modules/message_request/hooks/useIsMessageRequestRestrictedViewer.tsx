// Module ID: 12535
// Function ID: 12536
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [4820, 5475, 7373, 12536, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 12535 (useIsMessageRequestRestrictedViewer)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4820 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5475 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7373 */;
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
