// Module ID: 6792
// Function ID: 6793
// Name: tapGestureHandlerProps
// Dependencies: [6793, 6791]

// Module 6792 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6793" /* 6793 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
