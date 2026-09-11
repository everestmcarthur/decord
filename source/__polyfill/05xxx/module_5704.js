// Module ID: 5704
// Function ID: 5705
// Dependencies: [17]
// Exports: getDefaultHeaderHeight

// Module 5704
import get_ActivityIndicator from "module_17" /* 17 */;

({ PixelRatio, Platform } = get_ActivityIndicator);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};
