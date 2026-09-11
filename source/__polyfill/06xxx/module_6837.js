// Module ID: 6837
// Function ID: 6838
// Dependencies: [6835, 6786]
// Exports: useSimultaneousGestures

// Module 6837
import ComposedGestureName from "ComposedGestureName" /* 6786 */;
import _mod6835 from "module_6835" /* 6835 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6835.useComposedGesture.apply(items1);
};
