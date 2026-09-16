// Module ID: 11609
// Function ID: 11610
// Name: SwipeToReplyExperiment
// Dependencies: [11610, 11611, 11612, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11609 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11610 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11611 */;
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
