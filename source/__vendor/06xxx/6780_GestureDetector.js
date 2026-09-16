// Module ID: 6780
// Function ID: 6781
// Name: GestureDetector
// Dependencies: [21, 6781, 6783, 6784, 6786, 6818]
// Exports: GestureDetector

// Module 6780 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6781 from "module_6781" /* 6781 */;
import _mod6783 from "module_6783" /* 6783 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6781.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6783.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6784).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6818).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6786).GestureDetector, {});
};
