// Module ID: 11790
// Function ID: 11791
// Name: applyOrientationLock
// Dependencies: [9477, 8332, 2]
// Exports: applyOrientationLock, releaseOrientationLock, restoreDefaultOrientationLock

// Module 11790 (applyOrientationLock)
import set from "set" /* 2 */;
import handleOrientationChange from "handleOrientationChange" /* 8332 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 9477 */;

let result = set.fileFinishedImporting("modules/device/native/applyOrientationLock.tsx");

export const applyOrientationLock = function applyOrientationLock(PORTRAIT, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (isOrientationLockSupportedDefault()) {
    handleOrientationChange.lockOrientation(PORTRAIT, flag);
    const obj = handleOrientationChange;
  }
};
export const releaseOrientationLock = function releaseOrientationLock(unlockAfterRotatingToPreviousLock) {
  if (isOrientationLockSupportedDefault()) {
    let obj = handleOrientationChange;
    obj = { unlockAfterRotatingToPreviousLock: null };
    obj[0] = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
    obj.unlockOrientation(obj);
  }
};
export const restoreDefaultOrientationLock = function restoreDefaultOrientationLock() {
  if (isOrientationLockSupportedDefault()) {
    const result = handleOrientationChange.restoreDefaultOrientation();
    const obj = handleOrientationChange;
  }
};
