// Module ID: 6672
// Function ID: 6673
// Name: GestureDetector
// Dependencies: [21, 6673, 6675, 6676, 6678, 6710]
// Exports: GestureDetector

// Module 6672 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6673 from "module_6673" /* 6673 */;
import _mod6675 from "module_6675" /* 6675 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6673.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6675.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6676).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6710).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6678).GestureDetector, {});
};
