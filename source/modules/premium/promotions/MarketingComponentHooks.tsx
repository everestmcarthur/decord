// Module ID: 10886
// Function ID: 10887
// Name: MarketingComponentHooks
// Dependencies: [4631, 4574, 504, 4348, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10886 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4574 */;
import AccessibilityStore from "AccessibilityStore" /* 4631 */;

const themes = tmp3(4348);
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
