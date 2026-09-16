// Module ID: 7780
// Function ID: 7781
// Name: getMediaPerformanceClass
// Dependencies: [4617, 2]
// Exports: default

// Module 7780 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4617 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
