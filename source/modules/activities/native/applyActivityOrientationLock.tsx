// Module ID: 17092
// Function ID: 17093
// Name: applyActivityOrientationLock
// Dependencies: [1920, 11878, 2]
// Exports: default

// Module 17092 (applyActivityOrientationLock)
import Constants from "Constants" /* 1920 */;
import applyOrientationLock from "applyOrientationLock" /* 11878 */;
import size from "module_2" /* 2 */;

const OrientationLockState = Constants.OrientationLockState;
let result = size.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  if (OrientationLockState.UNLOCKED === arg0) {
    const result = applyOrientationLock.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: true });
  } else if (tmp.PORTRAIT === arg0) {
    applyOrientationLock.applyOrientationLock("PORTRAIT");
  } else if (tmp.LANDSCAPE === arg0) {
    applyOrientationLock.applyOrientationLock("LANDSCAPE");
  }
};
