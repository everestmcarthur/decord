// Module ID: 6870
// Function ID: 6871
// Dependencies: [6871, 6822]
// Exports: useCompetingGestures

// Module 6870
import ComposedGestureName from "ComposedGestureName" /* 6822 */;
import _mod6871 from "module_6871" /* 6871 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod6871.useComposedGesture.apply(items1);
};
