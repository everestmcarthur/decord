// Module ID: 14556
// Function ID: 14557
// Dependencies: [14557, 14570, 14518, 14539]

// Module 14556
import _mod14539 from "module_14539" /* 14539 */;
import _mod14557 from "module_14557" /* 14557 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14557(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp6 = _mod14539(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(14539)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
