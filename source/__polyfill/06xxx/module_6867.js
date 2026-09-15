// Module ID: 6867
// Function ID: 6868
// Dependencies: [6868, 6819]
// Exports: useCompetingGestures

// Module 6867
import ComposedGestureName from "ComposedGestureName" /* 6819 */;
import _mod6868 from "module_6868" /* 6868 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod6868.useComposedGesture.apply(items1);
};
