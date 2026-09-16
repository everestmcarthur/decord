// Module ID: 6789
// Function ID: 6790
// Name: tapGestureHandlerProps
// Dependencies: [6790, 6788]

// Module 6789 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6790" /* 6790 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
