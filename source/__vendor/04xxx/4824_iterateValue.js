// Module ID: 4824
// Function ID: 4825
// Name: iterateValue
// Dependencies: [4825, 4826]

// Module 4824 (iterateValue)
import _mod4825 from "module_4825" /* 4825 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod4825(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4826)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4826)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
