// Module ID: 4890
// Function ID: 4891
// Name: iterateValue
// Dependencies: [4891, 4892]

// Module 4890 (iterateValue)
import _mod4891 from "module_4891" /* 4891 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod4891(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4892)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4892)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
