// Module ID: 7677
// Function ID: 7678
// Name: getDeviceMetadata
// Dependencies: [7475, 2]
// Exports: default

// Module 7677 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7475 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
