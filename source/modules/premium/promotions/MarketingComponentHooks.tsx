// Module ID: 10823
// Function ID: 10824
// Name: MarketingComponentHooks
// Dependencies: [4597, 4540, 504, 4313, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10823 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4540 */;
import AccessibilityStore from "AccessibilityStore" /* 4597 */;

const themes = tmp3(4313);
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
