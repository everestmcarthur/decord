// Module ID: 9478
// Function ID: 9479
// Name: isOrientationLockSupported
// Dependencies: [4539, 1608, 2]
// Exports: default

// Module 9478 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4539 */;
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
    result = tmp(4539).isOrientationLockSupported();
    const tmpResult2 = tmp(4539);
  }
  return result;
};
