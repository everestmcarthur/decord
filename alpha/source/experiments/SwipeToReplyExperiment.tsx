// Module ID: 11718
// Function ID: 11719
// Name: SwipeToReplyExperiment
// Dependencies: [11719, 11720, 11721, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11718 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11719 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11720 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
