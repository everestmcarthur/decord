// Module ID: 7791
// Function ID: 7792
// Name: getDeviceMetadata
// Dependencies: [7589, 2]
// Exports: default

// Module 7791 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7589 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
