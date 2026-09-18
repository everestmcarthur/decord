// Module ID: 17285
// Function ID: 17286
// Name: getTimeZone
// Dependencies: [4539, 2]
// Exports: default

// Module 17285 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4539 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
