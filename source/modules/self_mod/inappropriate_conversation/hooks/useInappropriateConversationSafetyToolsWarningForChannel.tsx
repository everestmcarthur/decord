// Module ID: 11400
// Function ID: 11401
// Name: useInappropriateConversationSafetyToolsWarningForChannel
// Dependencies: [10973, 10975, 10977, 2]
// Exports: useInappropriateConversationSafetyToolsWarningForChannel

// Module 11400 (useInappropriateConversationSafetyToolsWarningForChannel)
import set from "set" /* 2 */;
import InappropriateConversationExperiment from "InappropriateConversationExperiment" /* 10973 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 10975 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10977 */;

const result = set.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const isEligibleForInappropriateConversationWarning = InappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj = InappropriateConversationExperiment;
  const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault();
  const obj2 = useSafetyAlertsSettingOrDefault;
  const inappropriateConversationWarningsForChannel = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId);
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      const found = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp);
      if (0 !== found.length) {
        return found.sort((type, type2) => {
          if (type.type > type2.type) {
            let num = 1;
          } else {
            num = -1;
          }
          return num;
        })[0];
      }
    }
  }
};
