// Module ID: 10897
// Function ID: 10898
// Name: MarketingComponentHooks
// Dependencies: [4630, 4572, 504, 4346, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10897 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4572 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;

const themes = tmp3(4346);
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
