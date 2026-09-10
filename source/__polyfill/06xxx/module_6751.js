// Module ID: 6751
// Function ID: 6752
// Dependencies: [6737, 6752, 6728]
// Exports: useTapGesture

// Module 6751
import ComposedGestureName from "ComposedGestureName" /* 6728 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6737 */;
import _mod6752 from "module_6752" /* 6752 */;

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
  return _mod6752.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
