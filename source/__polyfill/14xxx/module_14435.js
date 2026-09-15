// Module ID: 14435
// Function ID: 14436
// Dependencies: [14436, 14449, 14397, 14418]

// Module 14435
import _mod14418 from "module_14418" /* 14418 */;
import _mod14436 from "module_14436" /* 14436 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14436(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp6 = _mod14418(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(14418)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
