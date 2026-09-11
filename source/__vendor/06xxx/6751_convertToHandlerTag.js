// Module ID: 6751
// Function ID: 6752
// Name: convertToHandlerTag
// Dependencies: [32, 19, 6752, 6753, 6763, 6764, 6765, 6767, 6768, 6769, 6748, 6732, 6770, 6730]
// Exports: checkGestureCallbacksForWorklets, extractGestureRelations, useForceRender, useWebEventHandlers

// Module 6751 (convertToHandlerTag)
import _mod6730 from "module_6730" /* 6730 */;
import _mod6748 from "module_6748" /* 6748 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function convertToHandlerTag(handlerTag) {
  if (typeof handlerTag === "number") {
    return handlerTag;
  } else if (handlerTag instanceof _mod6748.BaseGesture) {
    let num = handlerTag.handlerTag;
  } else {
    const current = handlerTag.current;
    num = undefined;
    if (current != null) {
      num = current.handlerTag;
    }
    if (num == null) {
      num = -1;
    }
  }
}
const noop = fn(19);
({ useCallback: c3, useRef: closure_4, useState: hasOwnProperty } = noop);
let items = [...fn(6752).baseGestureHandlerWithDetectorProps, ...fn(6753).tapGestureHandlerProps, ...fn(6763).panGestureHandlerProps, ...fn(6763).panGestureHandlerCustomNativeProps, ...fn(6764).longPressGestureHandlerProps, ...fn(6765).forceTouchGestureHandlerProps, ...fn(6767).flingGestureHandlerProps, ...fn(6768).hoverGestureHandlerProps, ...fn(6769).nativeViewGestureHandlerProps];
function emptyWorklet() {

}
emptyWorklet.__closure = {};
emptyWorklet.__workletHash = 11436428848425;
emptyWorklet.__initData = { code: "function emptyWorklet_Pnpm_utilsTs1(){}" };

export const ALLOWED_PROPS = items;
export const extractGestureRelations = function extractGestureRelations(item10007) {
  const requireToFail = item10007.config.requireToFail;
  let found;
  if (requireToFail != null) {
    const mapped = requireToFail.map(convertToHandlerTag);
    if (mapped != null) {
      found = mapped.filter((item) => item > 0);
    }
  }
  if (found == null) {
    found = [];
  }
  const obj = { waitFor: Array.from(new Set(found)), simultaneousHandlers: null, blocksHandlers: null };
  const simultaneousWith = item10007.config.simultaneousWith;
  let found1;
  if (simultaneousWith != null) {
    const mapped1 = simultaneousWith.map(convertToHandlerTag);
    if (mapped1 != null) {
      found1 = mapped1.filter((item) => item > 0);
    }
  }
  if (found1 == null) {
    found1 = [];
  }
  const set = new Set(found);
  obj.simultaneousHandlers = Array.from(new Set(found1));
  let found2;
  if (item10007.config.blocksHandlers != null) {
    const mapped2 = blocksHandlers.map(convertToHandlerTag);
    if (mapped2 != null) {
      found2 = mapped2.filter((item) => item > 0);
    }
  }
  if (found2 == null) {
    found2 = [];
  }
  const set1 = new Set(found1);
  obj.blocksHandlers = Array.from(new Set(found2));
  return obj;
};
export function checkGestureCallbacksForWorklets(item10022) {

}
export const useForceRender = function useForceRender() {
  const tmp = _slicedToArray(hasOwnProperty(false), 2);
  const first = tmp[0];
  closure_1 = tmp3;
  const items = [first, tmp[1]];
  return React3(() => {
    closure_1(!first);
  }, items);
};
export const useWebEventHandlers = function useWebEventHandlers() {
  return React4({
    onGestureHandlerEvent(nativeEvent) {
      const result = _mod6730.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerStateChange(nativeEvent) {
      const result = _mod6730.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerTouchEvent() {

    }
  });
};
