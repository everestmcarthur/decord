// Module ID: 6815
// Function ID: 6816
// Dependencies: [6813, 6764]
// Exports: useSimultaneousGestures

// Module 6815
import ComposedGestureName from "ComposedGestureName" /* 6764 */;
import _mod6813 from "module_6813" /* 6813 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6813.useComposedGesture.apply(items1);
};
