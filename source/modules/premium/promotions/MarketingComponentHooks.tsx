// Module ID: 10785
// Function ID: 10786
// Name: MarketingComponentHooks
// Dependencies: [4566, 4509, 504, 4282, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10785 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4509 */;
import AccessibilityStore from "AccessibilityStore" /* 4566 */;

const themes = tmp3(4282);
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
