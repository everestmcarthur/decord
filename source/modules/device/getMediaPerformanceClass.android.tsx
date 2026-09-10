// Module ID: 7686
// Function ID: 7687
// Name: getMediaPerformanceClass
// Dependencies: [4553, 2]
// Exports: default

// Module 7686 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4553 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
