// Module ID: 14369
// Function ID: 14370
// Dependencies: [14332, 14330, 14348, 14370, 14371]

// Module 14369
import _mod14330 from "module_14330" /* 14330 */;
import _mod14332 from "module_14332" /* 14332 */;
import _mod14348 from "module_14348" /* 14348 */;
import _mod14370 from "module_14370" /* 14370 */;

let closure_2 = _mod14332([].push);

export default (arg0, arg1) => {
  const tmp = _mod14330(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14348;
    let tmp14Result = tmp14(_mod14370, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(14348)(tmp, key10010);
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
    if (_mod14348(tmp, tmp7)) {
      let tmp5Result = tmp5(14371);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
