// Module ID: 6856
// Function ID: 6857
// Dependencies: [6831, 6846, 6822]
// Exports: useManualGesture

// Module 6856
import ComposedGestureName from "ComposedGestureName" /* 6822 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6831 */;
import _mod6846 from "module_6846" /* 6846 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6846.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
