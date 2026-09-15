// Module ID: 7777
// Function ID: 7778
// Name: getMediaPerformanceClass
// Dependencies: [4618, 2]
// Exports: default

// Module 7777 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4618 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
