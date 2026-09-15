// Module ID: 9604
// Function ID: 9605
// Name: isOrientationLockSupported
// Dependencies: [4618, 1609, 2]
// Exports: default

// Module 9604 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4618 */;
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
    result = tmp(4618).isOrientationLockSupported();
    const tmpResult2 = tmp(4618);
  }
  return result;
};
