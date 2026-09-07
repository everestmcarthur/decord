// Module ID: 11468
// Function ID: 11469
// Name: useIsMessageSwipeActionsEnabled
// Dependencies: [11469, 11470, 11471, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11468 (useIsMessageSwipeActionsEnabled)
import set from "set" /* 2 */;
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG" /* 11469 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11470 */;

const LaunchPadTypes = LAUNCH_PAD_SPRING_CONFIG.LaunchPadTypes;
const result = set.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
