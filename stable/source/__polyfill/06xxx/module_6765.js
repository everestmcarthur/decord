// Module ID: 6765
// Function ID: 6766
// Dependencies: [6763, 6714]
// Exports: useSimultaneousGestures

// Module 6765
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import _mod6763 from "module_6763" /* 6763 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6763.useComposedGesture.apply(items1);
};
