// Module ID: 6835
// Function ID: 6836
// Dependencies: [6834, 6785]
// Exports: useExclusiveGestures

// Module 6835
import ComposedGestureName from "ComposedGestureName" /* 6785 */;
import _mod6834 from "module_6834" /* 6834 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6834.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
