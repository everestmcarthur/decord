// Module ID: 6909
// Function ID: 6910
// Name: GestureDetector
// Dependencies: [21, 6910, 6912, 6913, 6915, 6947]
// Exports: GestureDetector

// Module 6909 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6910 from "module_6910" /* 6910 */;
import _mod6912 from "module_6912" /* 6912 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6910.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6912.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6913).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6947).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6915).GestureDetector, {});
};
