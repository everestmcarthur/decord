// Module ID: 6836
// Function ID: 6837
// Dependencies: [6835, 6786]
// Exports: useExclusiveGestures

// Module 6836
import ComposedGestureName from "ComposedGestureName" /* 6786 */;
import _mod6835 from "module_6835" /* 6835 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6835.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
