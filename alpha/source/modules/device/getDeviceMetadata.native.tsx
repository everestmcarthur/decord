// Module ID: 7911
// Function ID: 7912
// Name: getDeviceMetadata
// Dependencies: [7715, 2]
// Exports: default

// Module 7911 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7715 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
