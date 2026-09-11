// Module ID: 6777
// Function ID: 6778
// Dependencies: [19, 6762]
// Exports: useViewRefHandler

// Module 6777
import _mod19 from "module_19" /* 19 */;
import _modDef6762 from "module_6762" /* 6762 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6762(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
