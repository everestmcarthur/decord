// Module ID: 6955
// Function ID: 6956
// Dependencies: [6956, 6907]
// Exports: useCompetingGestures

// Module 6955
import ComposedGestureName from "ComposedGestureName" /* 6907 */;
import _mod6956 from "module_6956" /* 6956 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod6956.useComposedGesture.apply(items1);
};
