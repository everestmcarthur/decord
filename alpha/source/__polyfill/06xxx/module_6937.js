// Module ID: 6937
// Function ID: 6938
// Dependencies: [19, 6916, 6927, 6938, 6939, 6940, 6941]
// Exports: useDetectorUpdater

// Module 6937
import _mod19 from "module_19" /* 19 */;
import _modDef6927 from "module_6927" /* 6927 */;
import dropHandlers from "dropHandlers" /* 6939 */;
import attachHandlers from "attachHandlers" /* 6940 */;
import _mod6941 from "module_6941" /* 6941 */;

const require = globalThis.__r;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6927(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6941.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6941;
        }
      }
    }
    dropHandlers.dropHandlers(preparedGesture);
    attachHandlers.attachHandlers({ preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp3 });
    if (tmp3 !== current.previousViewTag) {
      tmp2.previousViewTag = tmp3;
      tmp2.forceRebuildReanimatedEvent = true;
      forceRender();
    }
  }, items);
};
