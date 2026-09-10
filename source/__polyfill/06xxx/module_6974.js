// Module ID: 6974
// Function ID: 6975
// Dependencies: [19, 6926]
// Exports: useMappingHelper

// Module 6974
import _mod19 from "module_19" /* 19 */;
import _mod6926 from "module_6926" /* 6926 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6926.useRecyclerViewContext();
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
