// Module ID: 12968
// Function ID: 12969
// Name: useMediaItemSpoilerState
// Dependencies: [32, 19, 8263, 4296, 4561, 1178, 2]
// Exports: useMediaItemSpoilerState

// Module 12968 (useMediaItemSpoilerState)
import native from "native" /* 1178 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
const __initData = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = function useMediaItemSpoilerState(index) {
  _require = index;
  const MediaViewerSourcesStore = require("useMediaViewerSources").MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(closure_0);
  });
  [tmp5, _slicedToArray] = sharedValue.useState(state);
  let obj = sharedValue;
  const tmp = _require;
  const tmp2 = state;
  let tmp4 = _slicedToArray(sharedValue.useState(state), 2);
  let num = 0;
  if (state) {
    num = 1;
  }
  sharedValue = require("ReanimatedRexport").useSharedValue(num);
  const items = [state, sharedValue];
  const effect = obj.useEffect(() => {
    let num = 0;
    if (state) {
      num = 1;
    }
    const obj = timing;
    const tmp4 = state;
    const fn = function t() {
      closure_0(state[3]).runOnJS(setSpoilerActive)(closure_1_1);
    };
    const obj2 = { duration: 200, easing: native.STANDARD_EASING };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive, hasSpoiler: tmp4 };
    fn.__workletHash = 15930548853488;
    fn.__initData = __initData;
    const result = sharedValue.set(obj.withTiming(num, obj2, "respect-motion-settings", fn));
  }, items);
  const items1 = [tmp5, ];
  let obj2 = require("ReanimatedRexport");
  class S {
    constructor() {
      obj = { opacity: closure_3.get() };
      return obj;
    }
  }
  S.__closure = { spoilerOpacity: sharedValue };
  S.__workletHash = 8496335051493;
  S.__initData = __initData;
  items1[1] = tmp(tmp2[3]).useAnimatedStyle(S);
  return items1;
};
