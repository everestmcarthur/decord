// Module ID: 8385
// Function ID: 8386
// Dependencies: [8386, 8387, 8388, 4670]

// Module 8385
import baseFlatten from "baseFlatten" /* 4670 */;
import baseRest from "baseRest" /* 8386 */;
import _mod8387 from "module_8387" /* 8387 */;
import baseOrderBy from "baseOrderBy" /* 8388 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8387(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8387(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
