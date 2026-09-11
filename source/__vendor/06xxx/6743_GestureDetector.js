// Module ID: 6743
// Function ID: 6744
// Name: GestureDetector
// Dependencies: [21, 6744, 6746, 6747, 6749, 6781]
// Exports: GestureDetector

// Module 6743 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6744 from "module_6744" /* 6744 */;
import _mod6746 from "module_6746" /* 6746 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6744.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6746.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6747).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6781).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6749).GestureDetector, {});
};
