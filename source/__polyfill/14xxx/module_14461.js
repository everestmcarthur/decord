// Module ID: 14461
// Function ID: 14462
// Dependencies: [14462, 14475, 14423, 14444]

// Module 14461
import _mod14444 from "module_14444" /* 14444 */;
import _mod14462 from "module_14462" /* 14462 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14462(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp6 = _mod14444(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(14444)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
