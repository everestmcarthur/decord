// Module ID: 6845
// Function ID: 6846
// Dependencies: [6831, 6846, 6822]
// Exports: useTapGesture

// Module 6845
import ComposedGestureName from "ComposedGestureName" /* 6822 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6831 */;
import _mod6846 from "module_6846" /* 6846 */;

require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export const useTapGesture = function useTapGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod6846.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
