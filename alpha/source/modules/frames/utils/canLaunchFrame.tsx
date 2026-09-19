// Module ID: 9593
// Function ID: 9594
// Name: canLaunchFrame
// Dependencies: [1074, 9402, 9134, 2]
// Exports: canLaunchFrame

// Module 9593 (canLaunchFrame)
import Constants from "Constants" /* 1074 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9402 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let hasApplicationFlagResult = tmp(9134).hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const tmpResult = tmp(9134);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = AppLauncherUtils;
  }
  return false;
};
