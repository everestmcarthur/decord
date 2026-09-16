// Module ID: 6873
// Function ID: 6874
// Dependencies: [6871, 6822]
// Exports: useSimultaneousGestures

// Module 6873
import ComposedGestureName from "ComposedGestureName" /* 6822 */;
import _mod6871 from "module_6871" /* 6871 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6871.useComposedGesture.apply(items1);
};
