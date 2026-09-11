// Module ID: 6753
// Function ID: 6754
// Name: tapGestureHandlerProps
// Dependencies: [6754, 6752]

// Module 6753 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6754" /* 6754 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
