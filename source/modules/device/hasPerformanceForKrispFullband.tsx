// Module ID: 14067
// Function ID: 14068
// Name: hasPerformanceForKrispFullband
// Dependencies: [7672, 2]
// Exports: default

// Module 14067 (hasPerformanceForKrispFullband)
import set from "set" /* 2 */;
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 7672 */;

const result = set.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
