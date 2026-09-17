// Module ID: 16690
// Function ID: 16691
// Name: navigationTTIEnabled
// Dependencies: [14514, 2]
// Exports: isNavigationTTIEnabled

// Module 16690 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14514 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
