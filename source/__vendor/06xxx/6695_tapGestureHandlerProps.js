// Module ID: 6695
// Function ID: 6696
// Name: tapGestureHandlerProps
// Dependencies: [6696, 6694]

// Module 6695 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6696" /* 6696 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
