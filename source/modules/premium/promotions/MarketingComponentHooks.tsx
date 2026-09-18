// Module ID: 10999
// Function ID: 11000
// Name: MarketingComponentHooks
// Dependencies: [4714, 4656, 504, 4430, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10999 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4656 */;
import AccessibilityStore from "AccessibilityStore" /* 4714 */;

const themes = tmp3(4430);
require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = useThemeDefault();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = themes;
  }
};
