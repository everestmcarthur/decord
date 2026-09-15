// Module ID: 17158
// Function ID: 17159
// Name: applyActivityOrientationLock
// Dependencies: [1921, 11917, 2]
// Exports: default

// Module 17158 (applyActivityOrientationLock)
import Constants from "Constants" /* 1921 */;
import applyOrientationLock from "applyOrientationLock" /* 11917 */;
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
