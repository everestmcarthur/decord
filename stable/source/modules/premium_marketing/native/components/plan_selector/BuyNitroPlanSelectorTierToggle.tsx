// Module ID: 13410
// Function ID: 13411
// Name: BuyNitroPlanSelectorTierToggle
// Dependencies: [32, 19, 17, 7432, 1373, 21, 4560, 576, 4296, 4561, 4564, 4563, 4987, 1093, 13362, 4528, 4529, 4556, 1114, 2]
// Exports: default

// Module 13410 (BuyNitroPlanSelectorTierToggle)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import timing from "timing" /* 4561 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 4563 */;
import timingPresets from "timingPresets" /* 4564 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, StyleSheet, View: metroRequire } = get_ActivityIndicator);
const PremiumConstants = fn(1373);
({ PREMIUM_TYPE_DISPLAY_NAME: closure_7, PremiumTypes: closure_8 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
[tmp7, tmp8] = fn(7432).Gradients.PREMIUM_TIER_2;
let items = [tmp7, tmp8, tmp7, tmp8, tmp7];
const locations = [0, 0.25, 0.5, 0.75, 1];
const createStyles = fn(4560);
let obj2 = { pill: null, tab: null, indicator: null, gradientLayer: null, gradientTrack: null, gradientFill: null };
const importDefaultResultResult = _slicedToArray(fn(7432).Gradients.PREMIUM_TIER_2, 2);
obj2.pill = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, padding: nativeDefault.space.PX_4 };
let obj3 = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, padding: nativeDefault.space.PX_4 };
obj2.tab = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4 };
obj2.indicator = { position: "absolute", left: 0, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, overflow: "hidden" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.gradientLayer = {};
let obj7 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj7.right = undefined;
obj7.width = 240;
obj2.gradientTrack = obj7;
obj2.gradientFill = { flex: 1 };
let closure_13 = createStyles.createStyles(obj2);
const __initData = { code: "function BuyNitroPlanSelectorTierToggleTsx1(){const{nitroProgress}=this.__closure;return{opacity:nitroProgress.get()};}" };
const __initData2 = { code: "function BuyNitroPlanSelectorTierToggleTsx2(){const{gradientFlowX}=this.__closure;return{transform:[{translateX:gradientFlowX.get()}]};}" };
const __initData3 = { code: "function BuyNitroPlanSelectorTierToggleTsx3(){const{indicatorX,indicatorWidth}=this.__closure;return{transform:[{translateX:indicatorX.get()}],width:indicatorWidth.get()};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelectorTierToggle.tsx");

export default function BuyNitroPlanSelectorTierToggle(selectedTier) {
  selectedTier = selectedTier.selectedTier;
  ({ setSelectedTier: importDefault, disabled: dependencyMap } = selectedTier);
  noop = undefined;
  closure_5 = undefined;
  let ref;
  let sharedValue2;
  let sharedValue3;
  let ref2;
  const tmp = closure_13();
  _slicedToArray = tmp;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_0 = tmp2;
  let num = 0;
  if (selectedTier !== sharedValue2.TIER_0) {
    num = 1;
  }
  const sharedValue = selectedTier(4296).useSharedValue(num);
  closure_129_1 = sharedValue;
  items = [selectedTier !== sharedValue2.TIER_0, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (selectedTier) {
      num = 1;
    }
    const result = importDefault.set(timing.withTiming(num, timingPresets.timingStandard));
  }, items);
  let obj = selectedTier(4296);
  const sharedValue1 = selectedTier(4296).useSharedValue(0);
  closure_129_2 = sharedValue1;
  const items1 = [sharedValue1];
  const effect1 = noop.useEffect(() => {
    const accessibilityPreferencesSharedValue = reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
    if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
      const tmpResult = tmp(4296);
      const obj = { duration: 5000, easing: tmp(4296).Easing.linear };
      const result = disabled.set(tmpResult.withRepeat(tmp(4561).withTiming(-120, obj), -1, false));
      return () => selectedTier(disabled[8]).cancelAnimation(closure_1_2);
    }
  }, items1);
  const tmp3Result = selectedTier(4296);
  const fn = function s() {
    return { opacity: importDefault.get() };
  };
  fn.__closure = { nitroProgress: sharedValue };
  fn.__workletHash = 7392050192451;
  fn.__initData = __initData;
  const animatedStyle = selectedTier(4296).useAnimatedStyle(fn);
  const tmp3Result6 = selectedTier(4296);
  const fn2 = function c() {
    const obj = { transform: null };
    items = [{ translateX: disabled.get() }];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { gradientFlowX: sharedValue1 };
  fn2.__workletHash = 14545174926033;
  fn2.__initData = __initData2;
  const animatedStyle1 = selectedTier(4296).useAnimatedStyle(fn2);
  const tmp11 = _slicedToArray(noop.useState({}), 2);
  noop = tmp11[1];
  closure_5 = tmp12;
  noop.useRef(null);
  const tmp3Result7 = selectedTier(4296);
  ref = noop.useRef(new Map());
  const map = new Map();
  sharedValue2 = selectedTier(4296).useSharedValue(0);
  const tmp3Result8 = selectedTier(4296);
  sharedValue3 = selectedTier(4296).useSharedValue(0);
  ref2 = noop.useRef(false);
  const layoutEffect = noop.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      const current1 = ref.current;
      const item = current1.forEach((measureLayout, index) => {
        closure_0 = index;
        measureLayout.measureLayout(current, (x, y, width, height) => {
          closure_1_4((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            const size = { x, y, width, height };
            obj[x] = size;
            return obj;
          });
        });
      });
    }
  }, []);
  const items2 = [tmp11[0][selectedTier], sharedValue2, sharedValue3];
  const layoutEffect1 = noop.useLayoutEffect(() => {
    if (null != closure_5) {
      if (ref2.current) {
        const result = sharedValue2.set(timing.withTiming(tmp.x, { duration: 220 }));
        const result1 = sharedValue3.set(timing.withTiming(tmp.width, { duration: 220 }));
      } else {
        tmp12.current = true;
        const result2 = sharedValue2.set(tmp.x);
        const result3 = sharedValue3.set(tmp.width);
      }
    }
  }, items2);
  selectedTier(4296);
  const fn3 = function k() {
    const obj = { transform: null, width: null };
    items = [{ translateX: sharedValue2.get() }];
    obj.transform = items;
    obj.width = sharedValue3.get();
    return obj;
  };
  fn3.__closure = { indicatorX: sharedValue2, indicatorWidth: sharedValue3 };
  fn3.__workletHash = 16235876189557;
  fn3.__initData = __initData3;
  let obj2 = { ref, style: tmp.pill, accessibilityRole: "tablist", children: null };
  let tmp23 = null != tmp12;
  if (tmp23) {
    const obj3 = { pointerEvents: "none", style: null, children: null };
    const items3 = [tmp.indicator, , ];
    ({ y: obj9.top, height: obj9.height } = tmp12);
    items3[1] = { top: null, height: null };
    items3[2] = tmp20;
    obj3.style = items3;
    const obj5 = { style: null, children: null };
    const items4 = [tmp.gradientLayer, animatedStyle];
    obj5.style = items4;
    const obj6 = { style: null, children: null };
    const items5 = [tmp.gradientTrack, animatedStyle1];
    obj6.style = items5;
    const obj7 = { colors: items, locations, start: tmp3(1093).HorizontalGradient.START, end: tmp3(1093).HorizontalGradient.END, style: tmp.gradientFill };
    obj6.children = sharedValue3(LinearGradientDefault, obj7);
    obj5.children = sharedValue3(ReanimatedRexportDefault.View, obj6);
    obj3.children = sharedValue3(ReanimatedRexportDefault.View, obj5);
    tmp23 = sharedValue3(ReanimatedRexportDefault.View, obj3);
    const obj4 = { top: null, height: null };
  }
  const items6 = [tmp23, ];
  const NITRO_PLAN_TIERS = tmp3(13362).NITRO_PLAN_TIERS;
  items6[1] = NITRO_PLAN_TIERS.map((item) => {
    closure_0 = item;
    let str = "text-muted";
    if (item === closure_0) {
      let str2 = "interactive-text-active";
      if (item !== tmp3) {
        str2 = "text-overlay-light";
      }
      str = str2;
    }
    const obj = {
      ref(arg0) {
        if (null != arg0) {
          const current = ref.current;
          const result = current.set(closure_0, arg0);
        }
      },
      style: tab.tab,
      disabled,
      onPress() {
        const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.SELECTION);
        closure_2_1(closure_0);
      },
      accessibilityRole: "tab",
      accessibilityState: { selected: item === closure_0, disabled },
      children: null
    };
    const obj2 = { variant: "nitro-xs", color: str, children: null };
    const intl = selectedTier(disabled[18]).intl;
    if (item === sharedValue2.TIER_0) {
      let tUbSDK = selectedTier(disabled[18]).t.tUbSDK;
    } else {
      tUbSDK = ref[item];
    }
    obj2.children = intl.string(tUbSDK);
    obj.children = sharedValue3(selectedTier(disabled[17]).Text, obj2);
    return sharedValue3(closure_5, obj, item);
  });
  obj2.children = items6;
  return ref2(ref, obj2);
};
