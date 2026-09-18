// Module ID: 6941
// Function ID: 6942
// Dependencies: [6916, 6931, 6907]
// Exports: useManualGesture

// Module 6941
import ComposedGestureName from "ComposedGestureName" /* 6907 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6916 */;
import _mod6931 from "module_6931" /* 6931 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6931.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
