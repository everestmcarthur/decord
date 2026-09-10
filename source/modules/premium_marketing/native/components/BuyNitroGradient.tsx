// Module ID: 13421
// Function ID: 13422
// Name: BuyNitroGradient
// Dependencies: [19, 1373, 21, 4310, 5001, 4575, 4578, 2]
// Exports: default

// Module 13421 (BuyNitroGradient)
import timing from "timing" /* 4575 */;
import timingPresets from "timingPresets" /* 4578 */;
import LinearGradientDefault from "LinearGradient" /* 5001 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const __initData = { code: "function BuyNitroGradientTsx1(){const{withTiming,selectedTier,PremiumTypes,timingStandard}=this.__closure;return{opacity:withTiming(selectedTier===PremiumTypes.TIER_0?1:0,timingStandard)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroGradient.tsx");

export default function BuyNitroGradient(selectedTier) {
  selectedTier = selectedTier.selectedTier;
  ({ start, end, style } = selectedTier);
  ({ nitroColors, basicColors } = selectedTier);
  const fn = function f() {
    let num = 0;
    if (selectedTier === PremiumTypes.TIER_0) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  };
  let obj = selectedTier(4310);
  fn.__closure = { withTiming: selectedTier(4575).withTiming, selectedTier, PremiumTypes, timingStandard: selectedTier(4578).timingStandard };
  fn.__workletHash = 14014615431537;
  fn.__initData = __initData;
  const obj3 = { children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [closure_4(LinearGradientDefault, { style, colors: nitroColors, start, end }), ];
  const obj4 = { style: null, colors: basicColors, start, end };
  const items1 = [style, animatedStyle];
  obj4.style = items1;
  items[1] = closure_4(LinearGradient, obj4);
  obj3.children = items;
  return closure_6(closure_5, obj3);
};
