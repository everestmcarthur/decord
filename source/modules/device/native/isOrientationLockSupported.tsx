// Module ID: 9504
// Function ID: 9505
// Name: isOrientationLockSupported
// Dependencies: [4553, 1608, 2]
// Exports: default

// Module 9504 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4553 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DeviceUtils.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    result = !tmp(1608).isMetaQuest();
    const tmpResult = tmp(1608);
  }
  if (result) {
    result = tmp(4553).isOrientationLockSupported();
    const tmpResult2 = tmp(4553);
  }
  return result;
};
