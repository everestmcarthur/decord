// Module ID: 6681
// Function ID: 6682
// Name: tapGestureHandlerProps
// Dependencies: [6682, 6680]

// Module 6681 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6682" /* 6682 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
