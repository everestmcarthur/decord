// Module ID: 6763
// Function ID: 6764
// Dependencies: [6737, 6752, 6728]
// Exports: useNativeGesture

// Module 6763
import ComposedGestureName from "ComposedGestureName" /* 6728 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6737 */;
import _mod6752 from "module_6752" /* 6752 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6752.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
