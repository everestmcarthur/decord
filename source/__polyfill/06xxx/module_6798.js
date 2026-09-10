// Module ID: 6798
// Function ID: 6799
// Dependencies: [6773, 6788, 6764]
// Exports: useManualGesture

// Module 6798
import ComposedGestureName from "ComposedGestureName" /* 6764 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6773 */;
import _mod6788 from "module_6788" /* 6788 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6788.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
