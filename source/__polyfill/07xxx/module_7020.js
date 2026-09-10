// Module ID: 7020
// Function ID: 7021
// Dependencies: [19, 21, 7021, 6669]
// Exports: PanGestureHandler

// Module 7020
import LegacyBaseButton from "LegacyBaseButton" /* 6669 */;
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 7021 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = noop.useRef(null);
  const obj = { value: ref, children: null };
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.ref = ref;
  obj.children = jsx(LegacyBaseButton.PanGestureHandler, {});
  return jsx(GestureHandlerRefContext.GestureHandlerRefContext.Provider, { value: ref, children: null });
};
export const GestureHandlerRootView = fn(6669).GestureHandlerRootView;
export const GestureState = fn(6669).State;
