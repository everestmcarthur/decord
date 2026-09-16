// Module ID: 9615
// Function ID: 9616
// Name: isOrientationLockSupported
// Dependencies: [4617, 1609, 2]
// Exports: default

// Module 9615 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4617 */;
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
    result = tmp(4617).isOrientationLockSupported();
    const tmpResult2 = tmp(4617);
  }
  return result;
};
