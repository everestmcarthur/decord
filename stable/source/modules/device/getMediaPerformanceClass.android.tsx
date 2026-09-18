// Module ID: 7672
// Function ID: 7673
// Name: getMediaPerformanceClass
// Dependencies: [4539, 2]
// Exports: default

// Module 7672 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4539 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
