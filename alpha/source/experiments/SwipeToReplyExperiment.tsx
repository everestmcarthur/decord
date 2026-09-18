// Module ID: 11709
// Function ID: 11710
// Name: SwipeToReplyExperiment
// Dependencies: [11710, 11711, 11712, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11709 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11710 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11711 */;
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
