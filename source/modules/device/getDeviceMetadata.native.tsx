// Module ID: 7749
// Function ID: 7750
// Name: getDeviceMetadata
// Dependencies: [7548, 2]
// Exports: default

// Module 7749 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7548 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
