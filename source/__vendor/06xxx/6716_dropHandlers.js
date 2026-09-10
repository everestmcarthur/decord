// Module ID: 6716
// Function ID: 6717
// Name: dropHandlers
// Dependencies: [6698, 6673, 6703, 6700]
// Exports: dropHandlers

// Module 6716 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6673 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6698 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6700 */;
import MountRegistry2 from "MountRegistry" /* 6703 */;

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
