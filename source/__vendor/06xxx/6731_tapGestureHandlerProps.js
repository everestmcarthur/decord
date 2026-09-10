// Module ID: 6731
// Function ID: 6732
// Name: tapGestureHandlerProps
// Dependencies: [6732, 6730]

// Module 6731 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6732" /* 6732 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
