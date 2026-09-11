// Module ID: 6744
// Function ID: 6745
// Name: GestureDetector
// Dependencies: [21, 6745, 6747, 6748, 6750, 6782]
// Exports: GestureDetector

// Module 6744 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6745 from "module_6745" /* 6745 */;
import _mod6747 from "module_6747" /* 6747 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6745.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6747.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6748).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6782).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6750).GestureDetector, {});
};
