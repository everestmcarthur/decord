// Module ID: 17384
// Function ID: 17385
// Name: applyActivityOrientationLock
// Dependencies: [1921, 12025, 2]
// Exports: default

// Module 17384 (applyActivityOrientationLock)
import Constants from "Constants" /* 1921 */;
import applyOrientationLock from "applyOrientationLock" /* 12025 */;
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
