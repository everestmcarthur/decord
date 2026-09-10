// Module ID: 6778
// Function ID: 6779
// Dependencies: [6777, 6728]
// Exports: useExclusiveGestures

// Module 6778
import ComposedGestureName from "ComposedGestureName" /* 6728 */;
import _mod6777 from "module_6777" /* 6777 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6777.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
