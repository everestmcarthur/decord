// Module ID: 11625
// Function ID: 11626
// Name: useStrangerDangerWarning
// Dependencies: [1372, 11178, 504, 11626, 11627, 11238, 8921, 11237, 2]
// Exports: useStrangerDangerWarning

// Module 11625 (useStrangerDangerWarning)
import initialize from "initialize" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 8921 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11238 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11626 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11627 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SafetyWarningTypes = fn(11178).SafetyWarningTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(id);
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(id);
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
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
