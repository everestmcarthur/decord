// Module ID: 6865
// Function ID: 6866
// Name: GestureDetector
// Dependencies: [21, 6866, 6868, 6869, 6871, 6903]
// Exports: GestureDetector

// Module 6865 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6866 from "module_6866" /* 6866 */;
import _mod6868 from "module_6868" /* 6868 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6866.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6868.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6869).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6903).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6871).GestureDetector, {});
};
