// Module ID: 10758
// Function ID: 10759
// Name: MarketingComponentHooks
// Dependencies: [4552, 4495, 504, 4269, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10758 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4495 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

const themes = tmp3(4269);
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
