// Module ID: 13422
// Function ID: 13423
// Name: BuyNitroMarketingHeader
// Dependencies: [19, 17, 7446, 21, 576, 4574, 4310, 4577, 4575, 4509, 13423, 1115, 9513, 13421, 1093, 5601, 7448, 9422, 5001, 1114, 13424, 4570, 8113, 12316, 2]
// Exports: default

// Module 13422 (BuyNitroMarketingHeader)
import nativeDefault from "native" /* 576 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 4577 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Gradients = fn(7446).Gradients;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4574);
let closure_11 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num = 0;
  if (arg1) {
    num = 0;
    if (arg2) {
      num = tmp(576).space.PX_8;
    }
  }
  const obj = { marginHorizontal: -nativeDefault.space.PX_16 + num, marginTop: null, marginBottom: null, overflow: null };
  PX_8 = undefined;
  if (arg1) {
    if (arg2) {
      PX_8 = tmp(576).space.PX_8;
    }
  }
  obj.marginTop = PX_8;
  obj.marginBottom = nativeDefault.space.PX_16;
  let str;
  if (arg1) {
    if (arg2) {
      str = "hidden";
    }
  }
  const obj2 = { banner: obj, background: null, clouds: null, wumpus: null, wumpusImage: null, backButton: null, content: null, fade: null };
  obj.overflow = str;
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  if (!arg1) {
    let num2 = 5 * -tmp(576).space.PX_192;
  } else {
    num2 = 0;
  }
  obj3.top = num2;
  obj3.color = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  let sm;
  if (arg1) {
    if (arg2) {
      sm = tmp(576).radii.sm;
    }
  }
  obj3.borderRadius = sm;
  obj2.background = obj3;
  const rect = { position: "absolute", top: -tmp(576).space.PX_16, right: "call", left: "options", alignSelf: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007445693852992177 };
  obj2.clouds = rect;
  const rect1 = { position: "absolute", top: arg0 + tmp(576).space.PX_20, right: tmp(576).space.PX_4 };
  obj2.wumpus = rect1;
  const tmp3 = -nativeDefault.space.PX_16;
  const tmp5 = absoluteFillObject;
  obj2.wumpusImage = { height: nativeDefault.space.PX_80 + nativeDefault.space.PX_4 };
  let num4 = 0;
  if (arg1) {
    num4 = tmp(576).space.PX_8;
  }
  const rect2 = { position: "absolute", top: arg0 - num4, left: null, transform: null };
  let num5 = 0;
  if (!arg1) {
    num5 = tmp(576).space.PX_8;
  }
  rect2.left = nativeDefault.space.PX_8 + num5;
  const items = [{ scaleX: -1 }];
  rect2.transform = items;
  obj2.backButton = rect2;
  const obj5 = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingTop: null, paddingHorizontal: null, paddingBottom: null };
  const sum = arg0 + tmp(576).space.PX_80;
  obj5.paddingTop = sum + nativeDefault.space.PX_4;
  obj5.paddingHorizontal = nativeDefault.space.PX_16;
  const space = tmp(576).space;
  obj5.paddingBottom = arg1 ? space.PX_24 : space.PX_32;
  obj2.content = obj5;
  const obj6 = {};
  const merged1 = Object.assign(tmp5.absoluteFillObject);
  obj6.height = nativeDefault.space.PX_96;
  obj6.position = "absolute";
  obj6.top = undefined;
  obj2.fade = obj6;
  return obj2;
});
const __initData = { code: "function BuyNitroMarketingHeaderTsx1(){const{floatX,floatY}=this.__closure;return{transform:[{translateX:floatX.get()},{translateY:floatY.get()}]};}" };
const __initData2 = { code: "function BuyNitroMarketingHeaderTsx2(){const{cloudsOpacity}=this.__closure;return{opacity:cloudsOpacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingHeader.tsx");

export default function BuyNitroMarketingHeader(arg0) {
  ({ topInset, onBackPress, selectedTier } = arg0);
  const tmp5 = sharedValue1(sharedValue2[9])() === sharedValue(sharedValue2[10]).ThemeTypes.LIGHT;
  let tmp6 = tmp5;
  if (tmp5) {
    tmp6 = !tmp4(tmp2[11]).isAndroid();
    const tmp4Result = tmp4(tmp2[11]);
  }
  const tmp7 = closure_11(topInset, tmp5, tmp6);
  const color = tmp7.background.color;
  sharedValue = undefined;
  sharedValue1 = undefined;
  sharedValue2 = undefined;
  const tmp3 = sharedValue1(sharedValue2[9])();
  sharedValue = sharedValue(sharedValue2[6]).useSharedValue(0);
  const tmp4Result7 = sharedValue(sharedValue2[6]);
  sharedValue1 = sharedValue(sharedValue2[6]).useSharedValue(0);
  const tmp4Result8 = sharedValue(sharedValue2[6]);
  sharedValue2 = sharedValue(sharedValue2[6]).useSharedValue(1);
  let items = [sharedValue, sharedValue1, sharedValue2];
  const effect = noop.useEffect(() => {
    const accessibilityPreferencesSharedValue = reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
    if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
      const tmpResult = tmp(4310);
      const result = sharedValue.set(tmpResult.withRepeat(tmp(4575).withTiming(PX_8, { duration: 3400 }), -1, true));
      const tmpResult6 = tmp(4575);
      const tmpResult7 = tmp(4310);
      const result1 = sharedValue1.set(tmpResult7.withRepeat(tmp(4575).withTiming(-PX_12, { duration: 2600 }), -1, true));
      const tmpResult8 = tmp(4575);
      const tmpResult9 = tmp(4310);
      const result2 = sharedValue2.set(tmpResult9.withRepeat(tmp(4575).withTiming(0.6, { duration: 2800 }), -1, true));
      const tmpResult10 = tmp(4575);
    }
  }, items);
  const tmp4Result9 = sharedValue(sharedValue2[6]);
  const fn = function s() {
    const obj = { transform: null };
    const items = [{ translateX: sharedValue.get() }, ];
    const obj2 = { translateX: sharedValue.get() };
    items[1] = { translateY: sharedValue1.get() };
    obj.transform = items;
    return obj;
  };
  fn.__closure = { floatX: sharedValue, floatY: sharedValue1 };
  fn.__workletHash = 17204816956621;
  fn.__initData = __initData;
  const animatedStyle = sharedValue(sharedValue2[6]).useAnimatedStyle(fn);
  const tmp4Result10 = sharedValue(sharedValue2[6]);
  const fn2 = function o() {
    return { opacity: sharedValue2.get() };
  };
  fn2.__closure = { cloudsOpacity: sharedValue2 };
  fn2.__workletHash = 10630022886341;
  fn2.__initData = __initData2;
  let obj = { style: tmp7.banner, children: null };
  const animatedStyle1 = sharedValue(sharedValue2[6]).useAnimatedStyle(fn2);
  const tmp4Result11 = sharedValue(sharedValue2[6]);
  let isAndroidResult = sharedValue(sharedValue2[11]).isAndroid();
  if (isAndroidResult) {
    isAndroidResult = closure_7(tmp(tmp2[12]), { barStyle: "light-content" });
  }
  const items1 = [isAndroidResult, , , , , , ];
  let obj2 = { selectedTier, nitroColors: Gradients.PREMIUM_TIER_2, basicColors: Gradients.PREMIUM_TIER_0, start: null, end: null, style: null };
  const tmp4Result12 = sharedValue(sharedValue2[11]);
  obj2.start = sharedValue(sharedValue2[14]).HorizontalGradient.START;
  obj2.end = sharedValue(sharedValue2[14]).HorizontalGradient.END;
  obj2.style = tmp7.background;
  items1[1] = closure_7(sharedValue1(sharedValue2[13]), obj2);
  const obj3 = { style: null, children: null };
  const items2 = [tmp7.clouds, animatedStyle1];
  obj3.style = items2;
  const obj4 = { source: null, resizeMode: "contain" };
  let tmpResult = sharedValue1(sharedValue2[13]);
  obj4.source = sharedValue1(sharedValue2[16]);
  obj3.children = closure_7(sharedValue1(sharedValue2[15]), obj4);
  items1[2] = closure_7(sharedValue1(sharedValue2[6]).View, obj3);
  const obj5 = { style: null, children: null };
  const items3 = [tmp7.wumpus, animatedStyle];
  obj5.style = items3;
  const obj6 = { style: tmp7.wumpusImage, source: null, resizeMode: "contain" };
  const tmpResult5 = sharedValue1(sharedValue2[15]);
  obj6.source = sharedValue1(sharedValue2[17]);
  obj5.children = closure_7(sharedValue1(sharedValue2[15]), obj6);
  items1[3] = closure_7(sharedValue1(sharedValue2[6]).View, obj5);
  let tmp18Result = !tmp5;
  if (!tmp5) {
    const obj7 = { style: tmp7.fade, colors: null, start: null, end: null };
    const _HermesInternal = HermesInternal;
    const items4 = ["" + color + "00", color];
    obj7.colors = items4;
    obj7.start = tmp4(tmp2[14]).VerticalGradient.START;
    obj7.end = tmp4(tmp2[14]).VerticalGradient.END;
    tmp18Result = tmp18(tmp(tmp2[18]), obj7);
    let tmpResult7 = tmp(tmp2[18]);
  }
  items1[4] = tmp18Result;
  const obj8 = { style: tmp7.content, children: null };
  const obj9 = { accessible: true, accessibilityRole: "header", accessibilityLabel: null, source: null, resizeMode: "contain" };
  let tmpResult6 = sharedValue1(sharedValue2[15]);
  const intl = tmp4(tmp2[19]).intl;
  obj9.accessibilityLabel = intl.string(sharedValue(sharedValue2[19]).t.lpNrPu);
  obj9.source = sharedValue1(sharedValue2[20]);
  const items5 = [closure_7(sharedValue1(sharedValue2[15]), obj9), ];
  const obj10 = { variant: "text-md/medium", color: "text-overlay-light", children: null };
  const intl2 = tmp4(tmp2[19]).intl;
  obj10.children = intl2.string(sharedValue(sharedValue2[19]).t.SD5MJW);
  items5[1] = closure_7(sharedValue(sharedValue2[21]).Text, obj10);
  obj8.children = items5;
  items1[5] = closure_8(closure_5, obj8);
  const obj11 = { style: tmp7.backButton, children: null };
  const obj12 = { variant: "secondary-overlay", accessibilityLabel: null, icon: null, size: "md", onPress: null };
  const intl3 = tmp4(tmp2[19]).intl;
  obj12.accessibilityLabel = intl3.string(sharedValue(sharedValue2[19]).t["13/7kX"]);
  obj12.icon = sharedValue1(sharedValue2[23]);
  obj12.onPress = onBackPress;
  obj11.children = closure_7(sharedValue(sharedValue2[22]).IconButton, obj12);
  items1[6] = closure_7(closure_5, obj11);
  obj.children = items1;
  return closure_8(closure_5, obj);
};
