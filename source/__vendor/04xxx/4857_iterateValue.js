// Module ID: 4857
// Function ID: 4858
// Name: iterateValue
// Dependencies: [4858, 4859]

// Module 4857 (iterateValue)
import _mod4858 from "module_4858" /* 4858 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod4858(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4859)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4859)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
