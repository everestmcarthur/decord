// Module ID: 6834
// Function ID: 6835
// Dependencies: [6835, 6786]
// Exports: useCompetingGestures

// Module 6834
import ComposedGestureName from "ComposedGestureName" /* 6786 */;
import _mod6835 from "module_6835" /* 6835 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod6835.useComposedGesture.apply(items1);
};
