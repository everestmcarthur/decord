// Module ID: 6752
// Function ID: 6753
// Name: tapGestureHandlerProps
// Dependencies: [6753, 6751]

// Module 6752 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6753" /* 6753 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
