// Module ID: 6957
// Function ID: 6958
// Dependencies: [6956, 6907]
// Exports: useExclusiveGestures

// Module 6957
import ComposedGestureName from "ComposedGestureName" /* 6907 */;
import _mod6956 from "module_6956" /* 6956 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6956.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
