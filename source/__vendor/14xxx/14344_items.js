// Module ID: 14344
// Function ID: 14345
// Name: items
// Dependencies: [14307, 14305, 14323, 14345, 14346]

// Module 14344 (items)
import _mod14305 from "module_14305" /* 14305 */;
import call from "call" /* 14307 */;
import call2 from "call" /* 14323 */;
import _mod14345 from "module_14345" /* 14345 */;

let closure_2 = call([].push);

export default (arg0, arg1) => {
  const tmp = _mod14305(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp11 = key10010;
    let tmp12 = require;
    let tmp13 = dependencyMap;
    let tmp14 = call2;
    let tmp14Result = tmp14(_mod14345, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(14323)(tmp, key10010);
    }
    if (!tmp2) {
      continue;
    } else {
      let tmp3 = callback;
      let tmp4 = callback(items, key10010);
      continue;
    }
    continue;
  }
  for (let num = 0; arg1.length > num; num = num + 1) {
    let tmp5 = require;
    let tmp6 = dependencyMap;
    let tmp7 = arg1[num];
    let tmp8 = num;
    if (call2(tmp, tmp7)) {
      let tmp5Result = tmp5(14346);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp9 = callback;
        let tmp10 = callback(items, tmp7);
      }
    }
  }
  return items;
};
