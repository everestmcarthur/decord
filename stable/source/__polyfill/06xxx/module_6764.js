// Module ID: 6764
// Function ID: 6765
// Dependencies: [6763, 6714]
// Exports: useExclusiveGestures

// Module 6764
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import _mod6763 from "module_6763" /* 6763 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6763.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
