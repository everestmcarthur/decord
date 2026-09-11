// Module ID: 9563
// Function ID: 9564
// Name: isOrientationLockSupported
// Dependencies: [4585, 1608, 2]
// Exports: default

// Module 9563 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4585 */;
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
    result = tmp(4585).isOrientationLockSupported();
    const tmpResult2 = tmp(4585);
  }
  return result;
};
