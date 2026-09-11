// Module ID: 6821
// Function ID: 6822
// Dependencies: [6795, 6810, 6786]
// Exports: useNativeGesture

// Module 6821
import ComposedGestureName from "ComposedGestureName" /* 6786 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6795 */;
import _mod6810 from "module_6810" /* 6810 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6810.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
