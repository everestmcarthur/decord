// Module ID: 6942
// Function ID: 6943
// Dependencies: [19, 6927]
// Exports: useViewRefHandler

// Module 6942
import _mod19 from "module_19" /* 19 */;
import _modDef6927 from "module_6927" /* 6927 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6927(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
