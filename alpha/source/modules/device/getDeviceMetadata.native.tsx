// Module ID: 7873
// Function ID: 7874
// Name: getDeviceMetadata
// Dependencies: [7671, 2]
// Exports: default

// Module 7873 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7671 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
