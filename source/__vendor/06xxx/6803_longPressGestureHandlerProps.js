// Module ID: 6803
// Function ID: 6804
// Name: longPressGestureHandlerProps
// Dependencies: [6793, 6791]

// Module 6803 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6793" /* 6793 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
