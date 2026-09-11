// Module ID: 10844
// Function ID: 10845
// Name: MarketingComponentHooks
// Dependencies: [4599, 4542, 504, 4315, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10844 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4542 */;
import AccessibilityStore from "AccessibilityStore" /* 4599 */;

const themes = tmp3(4315);
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
