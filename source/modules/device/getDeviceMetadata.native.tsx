// Module ID: 7728
// Function ID: 7729
// Name: getDeviceMetadata
// Dependencies: [7527, 2]
// Exports: default

// Module 7728 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
