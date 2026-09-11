// Module ID: 7745
// Function ID: 7746
// Name: getMediaPerformanceClass
// Dependencies: [4586, 2]
// Exports: default

// Module 7745 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4586 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
