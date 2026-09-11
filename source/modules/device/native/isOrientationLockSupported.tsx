// Module ID: 9565
// Function ID: 9566
// Name: isOrientationLockSupported
// Dependencies: [4586, 1608, 2]
// Exports: default

// Module 9565 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4586 */;
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
    result = tmp(4586).isOrientationLockSupported();
    const tmpResult2 = tmp(4586);
  }
  return result;
};
