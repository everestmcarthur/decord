// Module ID: 14328
// Function ID: 14329
// Name: all
// Dependencies: [14326, 14300]

// Module 14328 (all)
import _mod14300 from "module_14300" /* 14300 */;
import all from "all" /* 14326 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14300[arg0];
    let tmp8;
    if (all(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14300[arg0];
    if (tmp3) {
      tmp3 = tmp(14300)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
