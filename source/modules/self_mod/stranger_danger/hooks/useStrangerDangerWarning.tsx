// Module ID: 11369
// Function ID: 11370
// Name: useStrangerDangerWarning
// Dependencies: [1371, 10920, 504, 11370, 11371, 10978, 8649, 10977, 2]
// Exports: useStrangerDangerWarning

// Module 11369 (useStrangerDangerWarning)
import initialize from "initialize" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 8649 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10978 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11370 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11371 */;
import closure_2 from "mergeGuildAvatar" /* 1371 */;
import { SafetyWarningTypes } from "handleConnectionOpen" /* 10920 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = initialize;
  const tmp = require;
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(id);
  const obj3 = useIsSpamMessageRequest;
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(id);
  const obj4 = useIsMessageRequest;
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = useChannelSafetyWarning;
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = useUserIsTeen;
  if (userIsTeen) {
    if (!isSpamMessageRequest) {
      if (!isMessageRequest) {
        if (tmpResult.useInappropriateConversationWarningsForChannel(id).length <= 0) {
          return channelSafetyWarning;
        }
      }
    }
  }
};
