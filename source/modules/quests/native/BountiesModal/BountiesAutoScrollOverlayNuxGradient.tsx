// Module ID: 15104
// Function ID: 15105
// Name: BountiesAutoScrollOverlayNuxGradient
// Dependencies: [19, 17, 21, 576, 4343, 4608, 4611, 5039, 2]
// Exports: default

// Module 15104 (BountiesAutoScrollOverlayNuxGradient)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4608 */;
import timingPresets from "timingPresets" /* 4611 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const BRAND_500 = nativeDefault.unsafe_rawColors.BRAND_500;
const __initData = { code: "function BountiesAutoScrollOverlayNuxGradientTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollOverlayNuxGradient.tsx");

export default function BountiesAutoScrollOverlayNuxGradient(active) {
  active = active.active;
  const sharedValue = active(4343).useSharedValue(0);
  const items = [active, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (active) {
      num = 1;
    }
    const result = sharedValue.set(timing.withTiming(num, timingPresets.timingSlow));
  }, items);
  const obj = active(4343);
  const fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 17406907036861;
  fn.__initData = __initData;
  const animatedStyle = active(4343).useAnimatedStyle(fn);
  const obj3 = { style: null, pointerEvents: "none", children: null };
  const items1 = [StyleSheet.absoluteFillObject, animatedStyle];
  obj3.style = items1;
  const obj4 = { style: StyleSheet.absoluteFillObject, colors: null, locations: null, start: null, end: null };
  const obj2 = active(4343);
  const items2 = ["" + BRAND_500 + "80", "" + BRAND_500 + "00"];
  obj4.colors = items2;
  obj4.locations = [0, 1];
  obj4.start = { x: 0.5, y: 1 };
  obj4.end = { x: 0.5, y: 0 };
  const items3 = [closure_5(sharedValue(5039), obj4), closure_5(sharedValue(5039), { style: StyleSheet.absoluteFillObject, colors: ["rgba(0,0,0,0.4)", "rgba(0,0,0,0)"], locations: [0, 0.5], start: { x: 0.5, y: 1 }, end: { x: 0.5, y: 0 } })];
  obj3.children = items3;
  return closure_6(sharedValue(4343).View, obj3);
};
