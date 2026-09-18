// Module ID: 12035
// Function ID: 12036
// Name: useChatInputMaxHeight
// Dependencies: [32, 19, 1479, 11966, 1877, 5579, 4427, 1609, 1477, 12036, 12037, 12038, 4561, 4564, 4296, 2]
// Exports: default, getChatInputHeightAnimationTiming, getChatInputHeightAnimationTimingWorklet, getChatInputMinHeight

// Module 12035 (useChatInputMaxHeight)
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1877 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import useKeyboardType from "useKeyboardType" /* 4427 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5579 */;
import useKeyboardStateSharedValue from "useKeyboardStateSharedValue" /* 12036 */;
import useWindowDimensionsSharedValue from "useWindowDimensionsSharedValue" /* 12037 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1479 */;

const useWindowDimensions = tmp(1477);
require = fn;
function getChatInputMaxHeight() {
  let systemKeyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6));
}
const CHAT_INPUT_PILL_CONTENT_SIZE = fn(11966).CHAT_INPUT_PILL_CONTENT_SIZE;
let c6 = 200;
function getChatInputMaxHeightWorklet() {
  const keyboardStateWorklet = useKeyboardStateSharedValue.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensionsSharedValue.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6));
}
getChatInputMaxHeightWorklet.__closure = { getKeyboardStateWorklet: fn(12036).getKeyboardStateWorklet, KeyboardTypes: fn(1609).KeyboardTypes, getWindowDimensionsWorklet: fn(12037).getWindowDimensionsWorklet, MAX_HEIGHT: 200, MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE };
getChatInputMaxHeightWorklet.__workletHash = 13025947543230;
getChatInputMaxHeightWorklet.__initData = { code: "function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){const{getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT}=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));}" };
function getChatInputHeightAnimationTimingWorklet(height, textFieldMinHeight) {
  if (typeof getChatInputMaxHeightWorklet === "function") {
    const keyboardStateWorklet = useKeyboardStateSharedValue.getKeyboardStateWorklet();
    ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
    if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
      keyboardHeight = customKeyboardHeight;
    }
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(tmp, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensionsSharedValue.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6)));
    const tmp2Result = useWindowDimensionsSharedValue;
    const obj2 = { duration: timingPresets.timingFastDuration, easing: ReanimatedRexport.Easing.linear };
    return timing.withTiming(bound, obj2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let obj = { getKeyboardStateWorklet: fn(12036).getKeyboardStateWorklet, KeyboardTypes: fn(1609).KeyboardTypes, getWindowDimensionsWorklet: fn(12037).getWindowDimensionsWorklet, MAX_HEIGHT: 200, MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE };
getChatInputHeightAnimationTimingWorklet.__closure = { getChatInputMaxHeightWorklet, withTiming: fn(4561).withTiming, timingFastDuration: fn(4564).timingFastDuration, Easing: fn(4296).Easing };
getChatInputHeightAnimationTimingWorklet.__workletHash = 17042993287975;
getChatInputHeightAnimationTimingWorklet.__initData = { code: "function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize,minHeight){const{getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing}=this.__closure;const value=Math.min(Math.max(contentSize,minHeight),getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  closure_0 = arg0;
  let tmp = _slicedToArray(noop.useState(getChatInputMaxHeight), 2);
  closure_1 = tmp[1];
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function maybeUpdateMaxHeight() {
      closure_1((arg0) => {
        let systemKeyboardHeight = closure_0(1877).getSystemKeyboardHeight();
        const obj = closure_0(1877);
        const tmp = closure_0;
        const customKeyboardHeight = closure_0(5579).getCustomKeyboardHeight();
        const obj2 = closure_0(5579);
        const keyboardType = closure_0(4427).getKeyboardType();
        if (keyboardType !== closure_0(1609).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const obj3 = closure_0(4427);
        const bound = Math.min(closure_2_6, Math.max(2 * closure_2_7, tmp(1477).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - closure_2_6));
        if (arg0 !== bound) {
          tmp6 = bound;
          if (closure_1_0 != null) {
            closure_1_0();
            tmp6 = bound;
          }
        }
        return tmp6;
      });
    }
    closure_0 = closure_1(dependencyMap[11])(maybeUpdateMaxHeight);
    closure_1 = subscribeToKeyboardUIStore(maybeUpdateMaxHeight);
    return () => {
      closure_0();
      closure_1();
    };
  }, items);
  return tmp[0];
};
export function getChatInputMinHeight() {
  return CHAT_INPUT_PILL_CONTENT_SIZE;
}
export { getChatInputMaxHeight };
export { getChatInputMaxHeightWorklet };
export const getChatInputHeightAnimationTiming = function getChatInputHeightAnimationTiming(height, arg1) {
  const bound = Math.max(height, arg1);
  let systemKeyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const bound1 = Math.min(bound, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6)));
  const tmp2Result = useWindowDimensions;
  const tmp2Result2 = timing;
  return tmp2Result2.withTiming(bound1, { duration: timingPresets.timingFastDuration, easing: ReanimatedRexport.Easing.linear });
};
export { getChatInputHeightAnimationTimingWorklet };
