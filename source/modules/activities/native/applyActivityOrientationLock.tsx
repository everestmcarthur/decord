// Module ID: 17043
// Function ID: 17044
// Name: applyActivityOrientationLock
// Dependencies: [1920, 11816, 2]
// Exports: default

// Module 17043 (applyActivityOrientationLock)
import Constants from "Constants" /* 1920 */;
import applyOrientationLock from "applyOrientationLock" /* 11816 */;
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
