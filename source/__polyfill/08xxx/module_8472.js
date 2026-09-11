// Module ID: 8472
// Function ID: 8473
// Dependencies: [8473, 8474, 8475, 4717]

// Module 8472
import baseFlatten from "baseFlatten" /* 4717 */;
import baseRest from "baseRest" /* 8473 */;
import _mod8474 from "module_8474" /* 8474 */;
import baseOrderBy from "baseOrderBy" /* 8475 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8474(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8474(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
