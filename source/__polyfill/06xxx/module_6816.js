// Module ID: 6816
// Function ID: 6817
// Dependencies: [19, 6801]
// Exports: useViewRefHandler

// Module 6816
import _mod19 from "module_19" /* 19 */;
import _modDef6801 from "module_6801" /* 6801 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6801(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
