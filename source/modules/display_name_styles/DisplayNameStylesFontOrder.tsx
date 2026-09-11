// Module ID: 15400
// Function ID: 15401
// Name: DisplayNameStylesFontOrder
// Dependencies: [19, 1389, 1391, 9267, 2]
// Exports: useVisibleFontOrder

// Module 15400 (DisplayNameStylesFontOrder)
import noop from "module_19" /* 19 */;

const require = fn;
let items = [fn(1391).DisplayNameFont.DEFAULT, fn(1391).DisplayNameFont.ZILLA_SLAB, fn(1391).DisplayNameFont.CHERRY_BOMB, fn(1391).DisplayNameFont.CHICLE, fn(1391).DisplayNameFont.MUSEO_MODERNO, fn(1391).DisplayNameFont.NEO_CASTEL, fn(1391).DisplayNameFont.PIXELIFY, fn(1391).DisplayNameFont.SINISTRE];
const items1 = [...fn(1389).FLYWHEEL_FONTS];
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = function useVisibleFontOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(9267).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return noop.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items1 : items, items);
};
