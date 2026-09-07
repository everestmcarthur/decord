// Module ID: 9477
// Function ID: 9478
// Name: isOrientationLockSupported
// Dependencies: [4539, 1608, 2]
// Exports: default

// Module 9477 (isOrientationLockSupported)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4539 */;

let result = set.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1608);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4539);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};
