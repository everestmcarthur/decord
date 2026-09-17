// Module ID: 7786
// Function ID: 7787
// Name: getMediaPerformanceClass
// Dependencies: [4619, 2]
// Exports: default

// Module 7786 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4619 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
