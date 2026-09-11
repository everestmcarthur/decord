// Module ID: 7750
// Function ID: 7751
// Name: getDeviceMetadata
// Dependencies: [7549, 2]
// Exports: default

// Module 7750 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7549 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
