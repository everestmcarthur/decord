// Module ID: 10445
// Function ID: 10446
// Name: StickerPickerEmptyState
// Dependencies: [32, 19, 17, 5516, 1938, 1074, 1373, 21, 4574, 10419, 10208, 7176, 7196, 504, 1242, 4570, 1114, 5137, 4542, 4543, 4989, 5601, 9392, 10439, 2]
// Exports: default

// Module 10445 (StickerPickerEmptyState)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HapticUtils from "HapticUtils" /* 4542 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4543 */;
import StickerDefault from "Sticker" /* 10208 */;
import StickersHooks from "StickersHooks" /* 10419 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StickersStore from "StickersStore" /* 5516 */;

const require = globalThis.__r;

require = fn;
function EmptyStateSticker(sticker) {
  sticker = sticker.sticker;
  const animated = StickersHooks.useShouldAnimateSticker(sticker.isFocused);
  let id;
  const tmp2 = closure_1_11;
  if (sticker != null) {
    id = sticker.id;
  }
  return tmp2(StickerDefault, { sticker, size: 60, animated }, id);
}
const View = fn(17).View;
const EMPTY_STATE_STICKERS = fn(1938).EMPTY_STATE_STICKERS;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = Constants);
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4574);
let closure_13 = createStyles.createStyles({ header: { marginBottom: 8, textAlign: "center" }, blurb: { lineHeight: 18, textAlign: "center", marginBottom: 12 }, premiumButton: { marginTop: 20, alignSelf: "center", paddingLeft: 5, paddingRight: 10, flexGrow: 0 }, nitroWheel: { width: 32 }, stickersRow: { flexDirection: "row", alignSelf: "center" }, sticker: { paddingHorizontal: 2 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerEmptyState.tsx");

export default function _default() {
  const tmp = closure_13();
  _require = tmp;
  const fetchStickerPacks = require("StickersHooks").useFetchStickerPacks();
  let obj = require("StickersHooks");
  analyticsLocations = analyticsLocations(7176)(analyticsLocations(7196).EMPTY_STATE).analyticsLocations;
  const tmp3 = analyticsLocations(7176);
  const items = [StickersStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const mapped = EMPTY_STATE_STICKERS.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => null != item);
  });
  let obj2 = require("initialize");
  [dependencyMap, _slicedToArray] = noop.useState(null);
  const items1 = [analyticsLocations];
  const effect = noop.useEffect(() => {
    const obj2 = { type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL, source: { section: constants2.EMPTY_STICKER_PICKER_UPSELL }, location_stack: analyticsLocations };
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
  }, items1);
  const obj3 = { children: null };
  const obj4 = { style: tmp.header, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj4.children = intl.string(require("util").t.HEm04J);
  const items2 = [closure_11(require("Text/Text").Text, obj4), , , ];
  const obj5 = { style: tmp.blurb, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj5.children = intl2.string(require("util").t.FnNud4);
  items2[1] = closure_11(require("Text/Text").Text, obj5);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  items2[2] = closure_11(View, {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((sticker) => {
      const obj = {
        accessible: false,
        onLongPress() {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          _slicedToArray(sticker.id);
        },
        style: sticker.sticker,
        children: closure_1_11(EmptyStateSticker, { sticker, isFocused: closure_2 === sticker.id })
      };
      let id;
      if (sticker != null) {
        id = sticker.id;
      }
      return closure_1_11(sticker(5137).PressableOpacity, obj, id);
    })
  });
  const obj7 = { style: tmp.premiumButton, children: null };
  const obj8 = { icon: null, text: null, variant: "active", size: "sm", onPress: null };
  const obj9 = { source: null, style: null, resizeMode: "contain" };
  const obj6 = {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((sticker) => {
      const obj = {
        accessible: false,
        onLongPress() {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          _slicedToArray(sticker.id);
        },
        style: sticker.sticker,
        children: closure_1_11(EmptyStateSticker, { sticker, isFocused: closure_2 === sticker.id })
      };
      let id;
      if (sticker != null) {
        id = sticker.id;
      }
      return closure_1_11(sticker(5137).PressableOpacity, obj, id);
    })
  };
  obj9.source = analyticsLocations(9392);
  obj9.style = tmp.nitroWheel;
  obj8.icon = closure_11(analyticsLocations(5601), obj9);
  const intl3 = require("util").intl;
  obj8.text = intl3.string(require("util").t.pj0XBN);
  obj8.onPress = function onPress() {
    return analyticsLocations(10439)({ section: constants.EXPRESSION_PICKER });
  };
  obj7.children = closure_11(require("components/Button/Button").Button, obj8);
  items2[3] = closure_11(View, obj7);
  obj3.children = items2;
  return closure_12(View, obj3);
};
