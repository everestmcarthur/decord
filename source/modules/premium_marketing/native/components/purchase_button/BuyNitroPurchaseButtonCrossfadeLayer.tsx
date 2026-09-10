// Module ID: 13415
// Function ID: 13416
// Name: BuyNitroPurchaseButtonCrossfadeLayer
// Dependencies: [32, 19, 17, 21, 4310, 4575, 4578, 4989, 2]
// Exports: default, useBuyNitroButtonCrossfade

// Module 13415 (BuyNitroPurchaseButtonCrossfadeLayer)
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import timing from "timing" /* 4575 */;
import timingPresets from "timingPresets" /* 4578 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const __initData = { code: "function BuyNitroPurchaseButtonCrossfadeLayerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_8 = { code: "function BuyNitroPurchaseButtonCrossfadeLayerTsx2(finished){const{runOnJS,onDone}=this.__closure;if(finished===true){runOnJS(onDone)();}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonCrossfadeLayer.tsx");

export default function BuyNitroPurchaseButtonCrossfadeLayer(arg0) {
  ({ snapshot, onDone } = arg0);
  const sharedValue = onDone(4310).useSharedValue(1);
  let obj = onDone(4310);
  let fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10244393639035;
  fn.__initData = __initData;
  const items = [sharedValue, onDone];
  const animatedStyle = onDone(4310).useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    const fn = function t(arg0) {
      if (true === arg0) {
        onDone(dependencyMap[4]).runOnJS(closure_1_0)();
        const obj = onDone(dependencyMap[4]);
      }
    };
    let obj = timing;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, onDone };
    fn.__workletHash = 12882875362433;
    fn.__initData = __initData;
    const result = sharedValue.set(obj.withTiming(0, timingPresets.timingStandard, "respect-motion-settings", fn));
  }, items);
  const obj3 = { style: null, pointerEvents: "none", children: jsx(onDone(4989).Button, { text: snapshot.ctaText, variant: snapshot.variant, size: "lg", grow: true, onPress: "Boolean" }) };
  const items1 = [StyleSheet.absoluteFill, animatedStyle];
  obj3.style = items1;
  return jsx(sharedValue(4310).View, { style: null, pointerEvents: "none", children: jsx(onDone(4989).Button, { text: snapshot.ctaText, variant: snapshot.variant, size: "lg", grow: true, onPress: "Boolean" }) });
};
export const useBuyNitroButtonCrossfade = function useBuyNitroButtonCrossfade(variant, stringResult) {
  const tmp = _slicedToArray(noop.useState({ variant, ctaText: stringResult }), 2);
  const snapshot = tmp[0];
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp4;
  let tmp5 = snapshot.variant === variant;
  if (tmp5) {
    tmp5 = snapshot.ctaText === stringResult;
  }
  if (!tmp5) {
    if (snapshot.variant !== variant) {
      tmp4((key) => {
        const obj = { snapshot, key: null };
        let num;
        if (key != null) {
          num = key.key;
        }
        if (num == null) {
          num = 0;
        }
        obj.key = num + 1;
        return obj;
      });
    }
    const obj3 = { variant, ctaText: stringResult };
    tmp[1](obj3);
  }
  return { outgoing: tmp3[0], onOutgoingDone: noop.useCallback(() => closure_1(null), []) };
};
