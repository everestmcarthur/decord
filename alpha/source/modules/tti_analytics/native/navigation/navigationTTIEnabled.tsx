// Module ID: 16863
// Function ID: 16864
// Name: navigationTTIEnabled
// Dependencies: [14664, 2]
// Exports: isNavigationTTIEnabled

// Module 16863 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14664 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
