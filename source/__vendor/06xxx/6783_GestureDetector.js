// Module ID: 6783
// Function ID: 6784
// Name: GestureDetector
// Dependencies: [21, 6784, 6786, 6787, 6789, 6821]
// Exports: GestureDetector

// Module 6783 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6784 from "module_6784" /* 6784 */;
import _mod6786 from "module_6786" /* 6786 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6784.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6786.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6787).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6821).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6789).GestureDetector, {});
};
