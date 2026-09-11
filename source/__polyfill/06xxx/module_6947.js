// Module ID: 6947
// Function ID: 6948
// Dependencies: [6929, 19, 6948]
// Exports: useLayoutState

// Module 6947
import _mod6948 from "module_6948" /* 6948 */;
import _slicedToArray from "module_6929" /* 6929 */;

require = fn;
const noop = fn(19);
({ useState: c3, useCallback: closure_4 } = noop);

export const useLayoutState = function useLayoutState(arg0) {
  const tmp = _slicedToArray(React3(arg0), 2);
  closure_0 = tmp[1];
  const recyclerViewContext = _mod6948.useRecyclerViewContext();
  const items = [tmp[0], ];
  const items1 = [recyclerViewContext];
  items[1] = React4((arg0, arg1) => {
    closure_0 = arg0;
    closure_0((arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        tmpResult = tmp(arg0);
      }
      return tmpResult;
    });
    if (!arg1) {
      if (recyclerViewContext != null) {
        obj.layout();
      }
      obj = recyclerViewContext;
    }
  }, items1);
  return items;
};
