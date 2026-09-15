// Module ID: 6786
// Function ID: 6787
// Name: tapGestureHandlerProps
// Dependencies: [6787, 6785]

// Module 6786 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6787" /* 6787 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
