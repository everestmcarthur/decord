// Module ID: 6996
// Function ID: 6997
// Dependencies: [19, 6948]
// Exports: useMappingHelper

// Module 6996
import _mod19 from "module_19" /* 19 */;
import _mod6948 from "module_6948" /* 6948 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6948.useRecyclerViewContext();
  const obj2 = { getMappingKey: null };
  const items = [recyclerViewContext];
  obj2.getMappingKey = useCallback((arg0, arg1) => {
    let tmp = arg0;
    if (recyclerViewContext) {
      tmp = arg1;
    }
    return tmp;
  }, items);
  return obj2;
};
