// Module ID: 6929
// Function ID: 6930
// Name: longPressGestureHandlerProps
// Dependencies: [6919, 6917]

// Module 6929 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6919" /* 6919 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
