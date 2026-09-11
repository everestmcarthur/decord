// Module ID: 12343
// Function ID: 12344
// Name: GiftIconTrinketsAnimation
// Dependencies: [19, 17, 4598, 21, 4606, 4308, 576, 504, 1925, 1115, 8900, 5638, 2]

// Module 12343 (GiftIconTrinketsAnimation)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4308 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;

const PlatformUtils = APNGPlayer(1115);
const FastImageDefault = tmp(5638);
const APNGPlayer2 = APNGPlayer(8900);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_6 = createStyles.createStyles((width) => ({ containerRefresh: { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = noop.memo((trinketsAnimationUrl) => {
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let APNGPlayer = require;
  let obj = dependencyMap;
  const tmp2 = closure_6(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const trinketsRefresh = tmp2.trinketsRefresh;
  if (obj4.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    const obj5 = { style: tmp2.containerRefresh, pointerEvents: "none", children: null };
    if (APNGPlayerResult.isAndroid()) {
      APNGPlayer = APNGPlayer2.APNGPlayer;
      obj = { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh };
      let tmp4Result = tmp4(APNGPlayer, obj);
    } else {
      const obj6 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj7 = { uri: trinketsAnimationUrl };
      obj6.source = obj7;
      obj6.style = trinketsRefresh;
      obj6.enableAnimation = !stateFromStores;
      tmp4Result = tmp4(FastImageDefault, obj6);
    }
    obj5.children = tmp4Result;
    <View style={tmp2.containerRefresh} pointerEvents="none">{null}</View>;
    APNGPlayerResult = PlatformUtils;
  }
});
