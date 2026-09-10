// Module ID: 6722
// Function ID: 6723
// Name: GestureDetector
// Dependencies: [21, 6723, 6725, 6726, 6728, 6760]
// Exports: GestureDetector

// Module 6722 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6723 from "module_6723" /* 6723 */;
import _mod6725 from "module_6725" /* 6725 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6723.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6725.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6726).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6760).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6728).GestureDetector, {});
};
