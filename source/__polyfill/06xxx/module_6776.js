// Module ID: 6776
// Function ID: 6777
// Dependencies: [19, 6761]
// Exports: useViewRefHandler

// Module 6776
import _mod19 from "module_19" /* 19 */;
import _modDef6761 from "module_6761" /* 6761 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6761(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
