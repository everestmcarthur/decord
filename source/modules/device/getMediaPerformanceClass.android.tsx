// Module ID: 7744
// Function ID: 7745
// Name: getMediaPerformanceClass
// Dependencies: [4585, 2]
// Exports: default

// Module 7744 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
