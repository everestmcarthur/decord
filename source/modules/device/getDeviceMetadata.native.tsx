// Module ID: 7691
// Function ID: 7692
// Name: getDeviceMetadata
// Dependencies: [7489, 2]
// Exports: default

// Module 7691 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
