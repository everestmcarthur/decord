// Module ID: 6870
// Function ID: 6871
// Dependencies: [6868, 6819]
// Exports: useSimultaneousGestures

// Module 6870
import ComposedGestureName from "ComposedGestureName" /* 6819 */;
import _mod6868 from "module_6868" /* 6868 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6868.useComposedGesture.apply(items1);
};
