// Module ID: 17364
// Function ID: 17365
// Name: getTimeZone
// Dependencies: [4585, 2]
// Exports: default

// Module 17364 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
