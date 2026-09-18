// Module ID: 6705
// Function ID: 6706
// Dependencies: [19, 6690]
// Exports: useViewRefHandler

// Module 6705
import _mod19 from "module_19" /* 19 */;
import _modDef6690 from "module_6690" /* 6690 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6690(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
