// Module ID: 11601
// Function ID: 11602
// Name: SwipeToReplyExperiment
// Dependencies: [11602, 11603, 11604, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11601 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11602 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11603 */;
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
