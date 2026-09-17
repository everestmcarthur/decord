// Module ID: 9626
// Function ID: 9627
// Name: isOrientationLockSupported
// Dependencies: [4619, 1609, 2]
// Exports: default

// Module 9626 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4619 */;
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
    result = tmp(4619).isOrientationLockSupported();
    const tmpResult2 = tmp(4619);
  }
  return result;
};
