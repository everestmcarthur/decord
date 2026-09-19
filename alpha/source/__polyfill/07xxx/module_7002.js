// Module ID: 7002
// Function ID: 7003
// Dependencies: [7000, 6951]
// Exports: useSimultaneousGestures

// Module 7002
import ComposedGestureName from "ComposedGestureName" /* 6951 */;
import _mod7000 from "module_7000" /* 7000 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7000.useComposedGesture.apply(items1);
};
