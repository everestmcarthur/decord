// Module ID: 6777
// Function ID: 6778
// Name: GestureDetector
// Dependencies: [21, 6778, 6780, 6781, 6783, 6815]
// Exports: GestureDetector

// Module 6777 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6778 from "module_6778" /* 6778 */;
import _mod6780 from "module_6780" /* 6780 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6778.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6780.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6781).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6815).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6783).GestureDetector, {});
};
