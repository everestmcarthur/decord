// Module ID: 6820
// Function ID: 6821
// Dependencies: [6795, 6810, 6786]
// Exports: useManualGesture

// Module 6820
import ComposedGestureName from "ComposedGestureName" /* 6786 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6795 */;
import _mod6810 from "module_6810" /* 6810 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6810.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
