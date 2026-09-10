// Module ID: 7723
// Function ID: 7724
// Name: getMediaPerformanceClass
// Dependencies: [4584, 2]
// Exports: default

// Module 7723 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
