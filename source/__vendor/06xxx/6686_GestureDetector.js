// Module ID: 6686
// Function ID: 6687
// Name: GestureDetector
// Dependencies: [21, 6687, 6689, 6690, 6692, 6724]
// Exports: GestureDetector

// Module 6686 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6687 from "module_6687" /* 6687 */;
import _mod6689 from "module_6689" /* 6689 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6687.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6689.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6690).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6724).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6692).GestureDetector, {});
};
