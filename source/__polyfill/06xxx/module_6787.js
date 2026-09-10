// Module ID: 6787
// Function ID: 6788
// Dependencies: [6773, 6788, 6764]
// Exports: useTapGesture

// Module 6787
import ComposedGestureName from "ComposedGestureName" /* 6764 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6773 */;
import _mod6788 from "module_6788" /* 6788 */;

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
  return _mod6788.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
