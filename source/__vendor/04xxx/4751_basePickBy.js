// Module ID: 4751
// Function ID: 4752
// Name: basePickBy
// Dependencies: [591, 4752, 592]

// Module 4751 (basePickBy)
import baseGet from "baseGet" /* 591 */;


export default function basePickBy(arg0, arg1, fn) {
  const obj = {};
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp4 = baseGet(arg0, tmp);
    if (fn(tmp4, tmp)) {
      let tmp2Result = tmp2(4752);
      let tmp2ResultResult = tmp2Result(obj, tmp2(592)(tmp, arg0), tmp4);
    }
  }
  return obj;
};
