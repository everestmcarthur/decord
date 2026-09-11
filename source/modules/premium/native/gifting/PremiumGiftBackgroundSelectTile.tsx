// Module ID: 11113
// Function ID: 11114
// Name: PremiumGiftBackgroundSelectTile
// Dependencies: [19, 17, 1373, 11114, 21, 11115, 11116, 11117, 11118, 11119, 11120, 11121, 11122, 11123, 4607, 576, 1114, 2460, 5639, 2]
// Exports: default

// Module 11113 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2460 from "module_2460" /* 2460 */;
import FastImageDefault from "FastImage" /* 5639 */;
import _modDef11115 from "module_11115" /* 11115 */;
import _modDef11116 from "module_11116" /* 11116 */;
import _modDef11117 from "module_11117" /* 11117 */;
import _modDef11118 from "module_11118" /* 11118 */;
import _modDef11119 from "module_11119" /* 11119 */;
import _modDef11120 from "module_11120" /* 11120 */;
import _modDef11121 from "module_11121" /* 11121 */;
import _modDef11122 from "module_11122" /* 11122 */;
import _modDef11123 from "module_11123" /* 11123 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1373).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(11114).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const GIFT_STYLE_IMG = { [STANDARD_BOX]: _modDef11115, [CAKE]: _modDef11116, [CHEST]: _modDef11117, [COFFEE]: _modDef11118 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef11119 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef11119 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef11120 };
let obj3 = { uri: _modDef11120 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef11121 };
let obj4 = { uri: _modDef11121 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef11122 };
const obj5 = { uri: _modDef11122 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef11123 };
const createStyles = fn(4607);
let closure_9 = createStyles.createStyles((arg0) => {
  const size = { width: 78, height: 44, justifyContent: "center", marginEnd: nativeDefault.space.PX_8, marginStart: null };
  let num = 0;
  if (0 === arg0) {
    num = 20;
  }
  const obj = { container: size, selected: null, image: null };
  size.marginStart = num;
  const size1 = { position: "absolute", borderColor: tmp(576).colors.TEXT_BRAND, borderRadius: tmp(576).radii.sm, borderWidth: 2, flex: 1, width: 78, height: 44 };
  obj.selected = size1;
  obj.image = { width: 72, height: 38, alignSelf: "center" };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx");

export default function GiftBackgroundSelectTile(index) {
  ({ selected, giftStyle } = index);
  const tmp = closure_9(index.index);
  let tmp4Result = null;
  if (null != obj[giftStyle]) {
    obj = { "aria-label": null, "aria-selected": null, style: null, onPress: null, children: null };
    const intl = util.intl;
    const obj2 = { giftStyle: null };
    const intl2 = util.intl;
    obj2.giftStyle = intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]);
    obj["aria-label"] = intl.formatToPlainString(_modDef2460["+utqaz"], obj2);
    obj["aria-selected"] = selected;
    obj.style = tmp.container;
    obj.onPress = index.onPress;
    if (selected) {
      const obj3 = { style: tmp.selected };
      selected = timestampProducer(React3, obj3);
    }
    const items = [selected, ];
    const obj4 = { resizeMode: "contain", style: tmp.image, source: tmp2 };
    items[1] = timestampProducer(FastImageDefault, obj4);
    obj.children = items;
    tmp4Result = React5(React4, obj);
  }
  return tmp4Result;
};
export { GIFT_STYLE_IMG };
