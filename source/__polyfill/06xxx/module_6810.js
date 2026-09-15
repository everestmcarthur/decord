// Module ID: 6810
// Function ID: 6811
// Dependencies: [19, 6795]
// Exports: useViewRefHandler

// Module 6810
import _mod19 from "module_19" /* 19 */;
import _modDef6795 from "module_6795" /* 6795 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6795(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
