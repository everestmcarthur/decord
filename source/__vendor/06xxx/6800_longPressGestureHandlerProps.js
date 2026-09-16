// Module ID: 6800
// Function ID: 6801
// Name: longPressGestureHandlerProps
// Dependencies: [6790, 6788]

// Module 6800 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6790" /* 6790 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
