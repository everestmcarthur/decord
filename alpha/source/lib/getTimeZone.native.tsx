// Module ID: 17689
// Function ID: 17690
// Name: getTimeZone
// Dependencies: [4735, 2]
// Exports: default

// Module 17689 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4735 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
