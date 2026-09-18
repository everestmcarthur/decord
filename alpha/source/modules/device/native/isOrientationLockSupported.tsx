// Module ID: 9710
// Function ID: 9711
// Name: isOrientationLockSupported
// Dependencies: [4701, 1609, 2]
// Exports: default

// Module 9710 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4701 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DeviceUtils.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    result = !tmp(1609).isMetaQuest();
    const tmpResult = tmp(1609);
  }
  if (result) {
    result = tmp(4701).isOrientationLockSupported();
    const tmpResult2 = tmp(4701);
  }
  return result;
};
