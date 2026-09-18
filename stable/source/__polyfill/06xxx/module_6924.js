// Module ID: 6924
// Function ID: 6925
// Dependencies: [19, 6876]
// Exports: useMappingHelper

// Module 6924
import _mod19 from "module_19" /* 19 */;
import _mod6876 from "module_6876" /* 6876 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6876.useRecyclerViewContext();
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
