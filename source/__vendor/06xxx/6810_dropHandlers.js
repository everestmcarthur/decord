// Module ID: 6810
// Function ID: 6811
// Name: dropHandlers
// Dependencies: [6792, 6767, 6797, 6794]
// Exports: dropHandlers

// Module 6810 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6767 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6792 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6794 */;
import MountRegistry2 from "MountRegistry" /* 6797 */;

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
