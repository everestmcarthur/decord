// Module ID: 14396
// Function ID: 14397
// Dependencies: [14359, 14357, 14375, 14397, 14398]

// Module 14396
import _mod14357 from "module_14357" /* 14357 */;
import _mod14359 from "module_14359" /* 14359 */;
import _mod14375 from "module_14375" /* 14375 */;
import _mod14397 from "module_14397" /* 14397 */;

let closure_2 = _mod14359([].push);

export default (arg0, arg1) => {
  const tmp = _mod14357(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14375;
    let tmp14Result = tmp14(_mod14397, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(14375)(tmp, key10010);
    }
    if (!tmp2) {
      continue;
    } else {
      let tmp4 = closure_2(items, key10010);
      continue;
    }
    continue;
  }
  for (let num = 0; arg1.length > num; num = num + 1) {
    let tmp5 = require;
    let tmp7 = arg1[num];
    if (_mod14375(tmp, tmp7)) {
      let tmp5Result = tmp5(14398);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
