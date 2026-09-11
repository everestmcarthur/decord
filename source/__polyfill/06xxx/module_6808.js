// Module ID: 6808
// Function ID: 6809
// Dependencies: [6794, 6809, 6785]
// Exports: useTapGesture

// Module 6808
import ComposedGestureName from "ComposedGestureName" /* 6785 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6794 */;
import _mod6809 from "module_6809" /* 6809 */;

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
  return _mod6809.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
