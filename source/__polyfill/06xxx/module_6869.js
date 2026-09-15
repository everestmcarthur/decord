// Module ID: 6869
// Function ID: 6870
// Dependencies: [6868, 6819]
// Exports: useExclusiveGestures

// Module 6869
import ComposedGestureName from "ComposedGestureName" /* 6819 */;
import _mod6868 from "module_6868" /* 6868 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6868.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
