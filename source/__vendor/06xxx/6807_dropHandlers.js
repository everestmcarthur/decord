// Module ID: 6807
// Function ID: 6808
// Name: dropHandlers
// Dependencies: [6789, 6764, 6794, 6791]
// Exports: dropHandlers

// Module 6807 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6764 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6789 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6791 */;
import MountRegistry2 from "MountRegistry" /* 6794 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export const dropHandlers = function dropHandlers(arg0) {
  for (const item10006 of tmp) {
    let obj = RNGestureHandlerModuleDefault;
    let dropGestureHandlerResult = obj.dropGestureHandler(item10006.handlerTag);
    let obj2 = handlerIDToTag;
    let unregisterHandlerResult = obj2.unregisterHandler(item10006.handlerTag, item10006.config.testId);
    let MountRegistry = MountRegistry2.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(item10006);
    continue;
  }
  const result = transformIntoHandlerTags.scheduleFlushOperations();
};
