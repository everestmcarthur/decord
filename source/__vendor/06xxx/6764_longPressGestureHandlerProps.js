// Module ID: 6764
// Function ID: 6765
// Name: longPressGestureHandlerProps
// Dependencies: [6754, 6752]

// Module 6764 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6754" /* 6754 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
