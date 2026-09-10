// Module ID: 6938
// Function ID: 6939
// Dependencies: [19, 6890]
// Exports: useMappingHelper

// Module 6938
import _mod19 from "module_19" /* 19 */;
import _mod6890 from "module_6890" /* 6890 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6890.useRecyclerViewContext();
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
