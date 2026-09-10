// Module ID: 17316
// Function ID: 17317
// Name: getTimeZone
// Dependencies: [4553, 2]
// Exports: default

// Module 17316 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4553 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
