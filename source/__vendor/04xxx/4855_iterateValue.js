// Module ID: 4855
// Function ID: 4856
// Name: iterateValue
// Dependencies: [4856, 4857]

// Module 4855 (iterateValue)
import _mod4856 from "module_4856" /* 4856 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod4856(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4857)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4857)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
