// Module ID: 6774
// Function ID: 6775
// Name: dropHandlers
// Dependencies: [6756, 6731, 6761, 6758]
// Exports: dropHandlers

// Module 6774 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6731 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6756 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6758 */;
import MountRegistry2 from "MountRegistry" /* 6761 */;

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
