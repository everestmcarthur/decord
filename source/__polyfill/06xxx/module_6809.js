// Module ID: 6809
// Function ID: 6810
// Dependencies: [6795, 6810, 6786]
// Exports: useTapGesture

// Module 6809
import ComposedGestureName from "ComposedGestureName" /* 6786 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6795 */;
import _mod6810 from "module_6810" /* 6810 */;

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
  return _mod6810.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
