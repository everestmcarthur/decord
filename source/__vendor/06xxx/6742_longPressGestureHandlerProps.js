// Module ID: 6742
// Function ID: 6743
// Name: longPressGestureHandlerProps
// Dependencies: [6732, 6730]

// Module 6742 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6732" /* 6732 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
