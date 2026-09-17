// Module ID: 17531
// Function ID: 17532
// Name: getTimeZone
// Dependencies: [4619, 2]
// Exports: default

// Module 17531 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4619 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
