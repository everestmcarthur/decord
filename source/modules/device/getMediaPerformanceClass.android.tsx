// Module ID: 7868
// Function ID: 7869
// Name: getMediaPerformanceClass
// Dependencies: [4701, 2]
// Exports: default

// Module 7868 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4701 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
