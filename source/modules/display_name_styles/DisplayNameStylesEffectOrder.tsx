// Module ID: 15401
// Function ID: 15402
// Name: DisplayNameStylesEffectOrder
// Dependencies: [19, 1389, 9269, 2]
// Exports: useVisibleEffectOrder

// Module 15401 (DisplayNameStylesEffectOrder)
import noop from "module_19" /* 19 */;

const require = fn;
const DisplayNameStylesConstants = fn(1389);
const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
let items = [...tmp2.FLYWHEEL_EFFECTS];
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = function useVisibleEffectOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(9269).useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return noop.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items : EFFECT_ORDER, items);
};
